import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import vm from "node:vm";
import path from "node:path";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const html = readFileSync(path.join(root, "index.html"), "utf8");
const scriptMatch = html.match(/<script>([\s\S]*?)<\/script>/);
assert.ok(scriptMatch, "index.html must contain the inline application script");
const script = scriptMatch[1];

function makeElement(id, dataset = {}) {
  return {
    id,
    value: id === "speed" ? "1" : "",
    textContent: "",
    dataset,
    style: {},
    attrs: {},
    listeners: {},
    addEventListener(type, callback) { this.listeners[type] = callback; },
    setAttribute(name, value) { this.attrs[name] = value; },
    focus() {},
  };
}

function createHarness(prefersReducedMotion = false) {
  const ids = {};
  [
    "speed", "speed-value", "trajectory", "satellite-dot", "satellite-label",
    "velocity-vector", "status-box", "status-title", "status-copy",
    "ratio-stat", "outcome-stat", "play", "reset", "quiz-feedback",
  ].forEach((id) => { ids[id] = makeElement(id); });

  const presets = ["0.70", "1.00", "1.50"].map((speed) => makeElement("preset", { speed }));
  const choices = ["a", "b", "c"].map((answer) => makeElement("answer", { answer }));
  const document = {
    getElementById(id) { return ids[id] ?? (ids[id] = makeElement(id)); },
    querySelectorAll(selector) {
      if (selector === "[data-speed]") return presets;
      if (selector === "[data-answer]") return choices;
      return [];
    },
  };
  const window = { matchMedia: () => ({ matches: prefersReducedMotion }) };
  const context = {
    document, window,
    requestAnimationFrame: () => 1,
    cancelAnimationFrame: () => {},
  };
  vm.runInNewContext(script, context, { timeout: 5000 });
  return { ids, presets, choices };
}

function radiiFromPath(d) {
  const pairs = [...d.matchAll(/[ML](-?\d+(?:\.\d+)?),(-?\d+(?:\.\d+)?)/g)];
  const radii = pairs.map((pair) =>
    Math.hypot((Number(pair[1]) - 260) / 56, (180 - Number(pair[2])) / 56)
  );
  assert.ok(radii.length > 100, "trajectory should contain many numeric samples");
  assert.ok(radii.every(Number.isFinite), "trajectory must contain only finite coordinates");
  return radii;
}

const app = createHarness();
const { ids, presets, choices } = app;
assert.equal(ids["outcome-stat"].textContent, "Circular", "default speed should be circular");
let radii = radiiFromPath(ids.trajectory.attrs.d);
assert.ok(Math.max(...radii) - Math.min(...radii) < 0.0003, "circular path radius should remain stable within tolerance");

ids.speed.value = "0.70";
ids.speed.listeners.input();
assert.equal(ids["outcome-stat"].textContent, "Impact", "0.70x circular speed should intersect the planet in this setup");
radii = radiiFromPath(ids.trajectory.attrs.d);
assert.ok(Math.min(...radii) <= 1.001, "low-speed path should reach the planet surface");

ids.speed.value = "1.50";
ids.speed.listeners.input();
assert.equal(ids["outcome-stat"].textContent, "Escape", "1.50x circular speed should be unbound");
radii = radiiFromPath(ids.trajectory.attrs.d);
assert.ok(Math.max(...radii) >= 3.99, "escape path should reach the edge of the model view");

presets[0].listeners.click();
assert.equal(ids["outcome-stat"].textContent, "Impact", "low-speed preset should update the model");
ids.reset.listeners.click();
assert.equal(ids.speed.value, "1", "reset should restore default speed");
assert.equal(ids["outcome-stat"].textContent, "Circular", "reset should restore circular outcome");

choices[1].listeners.click();
assert.match(ids["quiz-feedback"].textContent, /Correct/, "correct quiz choice should give positive feedback");
assert.equal(choices[1].attrs["aria-pressed"], "true", "selected answer should expose its pressed state");
choices[0].listeners.click();
assert.match(ids["quiz-feedback"].textContent, /Not quite/, "incorrect quiz choice should explain the misconception");

const reduced = createHarness(true);
const startX = reduced.ids["satellite-dot"].attrs.cx;
const startY = reduced.ids["satellite-dot"].attrs.cy;
reduced.ids.play.listeners.click();
const movedX = reduced.ids["satellite-dot"].attrs.cx;
const movedY = reduced.ids["satellite-dot"].attrs.cy;
assert.ok(startX !== movedX || startY !== movedY, "reduced-motion control should permit a user-requested step");

console.log("PASS: inline script parses and initializes");
console.log("PASS: circular orbit radius remains stable within tolerance");
console.log("PASS: 0.70x impact and 1.50x escape cases produce finite paths");
console.log("PASS: preset, reset, knowledge-check feedback, and reduced-motion control");

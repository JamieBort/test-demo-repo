import { add, subtract } from "../src/index";

test("add function passes", () => {
expect(add(2, 3)).toBe(5);
});

test("subtract function fails", () => {
expect(subtract(5, 3)).toBe(2); // will fail intentionally
});
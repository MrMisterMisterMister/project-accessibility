import { describe, expect, test } from "vitest";

describe("Testing Essex", () => {
    const essex = "Essex";

    test("Essex should contain sex", () => {
        expect(essex).toContain("sex");
    });

    test("Essex should not be empty", () => {
        expect(essex).not.toBe("");
    });

    test("Essex should start with Es", () => {
        expect(essex.startsWith("Es")).toBe(true);
    });

    test("Essex should end with ex", () => {
        expect(essex.endsWith("ex")).toBe(true);
    });
});

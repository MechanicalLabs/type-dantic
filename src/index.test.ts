import { describe, expect, test } from "bun:test";

describe("Hello, World!", () => {
  test("this is a hello world", () => {
    expect("hello_world").toBe("hello_world");
  });
});

import { describe, test, expect } from "@jest/globals";
import { isEmail } from "./index";

describe("email", () => {
  test("valid email", () => {
    expect(isEmail("a@example.com")).toEqual(true);
  });
  test("invalid email", () => {
    expect(isEmail("test")).toEqual(false);
  });

  // test("valid email", () => {
  //   expect(isEmail("abc@example.com")).toEqual(true);
  // });
  // test("invalid email", () => {
  //   expect(isEmail("test@example.com!@#")).toEqual(false);
  // });
  // test("invalid email", () => {
  //   expect(isEmail("!test@example.com")).toEqual(false);
  // });
});

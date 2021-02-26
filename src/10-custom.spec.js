import { getGreeting } from "./10-custom.js";

describe("10-custom", () => {
  it("should return string in a readable formatted way with AND if there are two emotions", () => {
    expect(getGreeting("Bella", "happy", "excited")).toEqual(
      "Hello Bella! It seems you are feeling happy and excited."
    );
  });

  it("should return string in a readable formatted way with commas if there are multiple emotions", () => {
    expect(getGreeting("Bella", "happy", "excited", "lonely", "good")).toEqual(
      "Hello Bella! It seems you are feeling happy, excited, lonely and good."
    );
  });

  it("should return a string specific for user who provides no emotions", () => {
    expect(getGreeting("Bella")).toEqual(
      "Hello Bella! So are you not feeling anything specific today?"
    );
  });

  it("should throw error if no arg is provded", () => {
    expect(() => {
      getGreeting();
    }).toThrow();
  });
});

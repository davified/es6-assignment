import { splitNames } from "../destructuring";

describe("Destructuring", () => {
  it("...", () => {
    const expectedFirstName = "tom";
    const expectedLastName = "cruise";
    const [actualFirstName, actualLastName] = splitNames("tom", "cruise");

    expect(actual).toEqual(expected);
  });
});

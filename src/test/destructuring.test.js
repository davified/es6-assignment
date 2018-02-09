import { getFirstName } from "../destructuring";

describe("Destructuring", () => {
  it("...", () => {
    const expectedFirstName = "tom";
    const expectedLastName = "cruise";
    const actualFirstName = getFirstName(["tom", "cruise"]);

    expect(actualFirstName).toEqual(expectedFirstName);
  });
});

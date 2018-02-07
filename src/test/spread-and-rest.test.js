import {
  buildTeam,
  join3Arrays,
  sum,
  joinArrayAndString,
  assignRolesInTeam,
  removePriceFromProperties
} from "../spread-and-rest";

describe("Rest", () => {
  it("buildTeam() should take in a variable number of arguments and return a list", () => {
    const expected = ["alice", "bob", "tom", "june"];
    const actual = buildTeam("alice", "bob", "tom", "june");

    expect(actual).toEqual(expected);
  });

  it("assignRolesInTeam() return an object with captain, viceCaptain and teamMembers keys", () => {
    const expected = {
      captain: "alice",
      viceCaptain: "bob",
      remainingMembers: ["tom", "june"]
    };
    const actual = assignRolesInTeam("alice", "bob", "tom", "june");

    expect(actual).toEqual(expected);
  });

  it("sum() should take in a variable number of arguments and return the sum", () => {
    const expected = 55;
    const actual = sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

    expect(actual).toEqual(expected);
  });
});

describe("Spread", () => {
  it("join3Arrays() should return a single array containing all elements", () => {
    const expected = [1, 2, 3, 4, 5];
    const actual = join3Arrays([1, 2], [3, 4], [5]);

    expect().toEqual();
  });

  it("join3Arrays() should return a single array containing all languages", () => {
    const expected = join3Arrays(["Javascript", "Python"], ["Java"], ["Ruby"]);
    const actual = ["Javascript", "Python", "Java", "Ruby"];

    expect(actual).toEqual(expected);
  });

  it("joinArrayAndString() should return a single array", () => {
    const expected = joinArrayAndString(["Javascript", "Python"], "Java");
    const actual = ["Javascript", "Python", "Java"];

    expect(actual).toEqual(expected);
  });

  it(" should() get remaining object properties", () => {
    const properties = {
      color: "red",
      brand: "mazda",
      seats: 5,
      price: 2000
    };
    const actual = removePriceFromProperties(properties);
    const expected = {
      color: "red",
      brand: "mazda",
      seats: 5
    };

    expect(actual).toEqual(expected);
  });
});

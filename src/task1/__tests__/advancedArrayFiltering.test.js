const {
  customFilterUnique,
  uniqueByName,
} = require("../advancedArrayFiltering");
const { people } = require("../../data/testData");

describe("customFilterUnique", () => {
  it("should return an array of unique elements based on the provided callback", () => {
    const expectedResult = [
      { name: "Emily Brown", age: 26 },
      { name: "Emily Doe", age: 40 },
      { name: "Jane Brown", age: 30 },
      { name: "Michael Smith", age: 48 },
      { name: "Jane Doe", age: 35 },
      { name: "Michael Johnson", age: 54 },
      { name: "John Brown", age: 38 },
      { name: "Emily Smith", age: 55 },
      { name: "John Smith", age: 53 },
      { name: "Emily Johnson", age: 41 },
    ];

    expect(customFilterUnique(people, uniqueByName)).toEqual(expectedResult);
  });

  it("should return an empty array if the input array is empty", () => {
    expect(customFilterUnique([], uniqueByName)).toEqual([]);
  });
});

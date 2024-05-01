const { people } = require("../data/testData");

function customFilterUnique(array, callback) {
  const unique = new Map();

  return array.filter((item) => {
    const key = callback(item);
    return unique.has(key) ? false : unique.set(key, true);
  });
}

const uniqueByAge = (person) => person.age;

console.log(customFilterUnique(people, uniqueByAge));

module.exports = {customFilterUnique, uniqueByAge};

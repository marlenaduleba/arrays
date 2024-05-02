function customFilterUnique(array, callback) {
  const unique = new Map();

  return array.filter((item) => {
    const key = callback(item);
    return unique.has(key) ? false : unique.set(key, true);
  });
}

const uniqueByName = (person) => person.name;

module.exports = { customFilterUnique, uniqueByName };

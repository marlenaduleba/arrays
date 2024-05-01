function chunkArray(array, size) {
  const chunked = [];
  let index = 0;

  while (index < array.length) {
    chunked.push(array.slice(index, index + size));
    index += size;
  }

  return chunked;
}

const testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(chunkArray(testArray, 2));

module.exports = { chunkArray, testArray };

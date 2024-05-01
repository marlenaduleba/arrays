function chunkArray(array, size) {
  const chunked = [];
  for (let i = 0; i < array.length; i += size) {
    chunked.push(array.slice(i, i + size));
  }
  return chunked;
}

const testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(chunkArray(testArray, 2)); 

module.exports = {chunkArray, testArray};
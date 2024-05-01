function getArrayIntersection(arr1, arr2) {
  return arr1.filter(el => arr2.includes(el));
}

function getArrayUnion(arr1, arr2) {
  return [...new Set([...arr1, ...arr2])];
}

const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];

console.log(getArrayIntersection(array1, array2));
console.log(getArrayUnion(array1, array2));

module.exports = {getArrayIntersection, getArrayUnion};
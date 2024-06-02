/* Lodash's Chunk method
Implement a function chunk(array, [size=1]) that splits the input array into groups of length size and returns them within a new array. If array can't be split evenly, the final chunk will be the remaining elements. The function should not modify the original input array.

Arguments
array (Array): The array to process.
[size=1] (number): The length of each chunk.
Returns
(Array): Returns the new array of chunks.

Examples
chunk(['a', 'b', 'c', 'd']); // => [['a'], ['b'], ['c'], ['d']]
chunk([1, 2, 3, 4], 2); // => [[1, 2], [3, 4]]
chunk([1, 2, 3, 4], 3); // => [[1, 2, 3], [4]]
The function should return an empty array if the array argument is empty.

Resources
Lodash _.chunk */

export default function chunk<T>(array: Array<T>, size = 1): Array<Array<T>> {
  const arr = [];

  let idx = 0;

  while (idx < array.length) {
    arr.push(array.slice(idx, idx + size));
    idx += size;
  }

  return arr;
}

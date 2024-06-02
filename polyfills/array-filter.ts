/* Array.prototype.filter creates a new array populated with the results of calling a provided function on every element in the calling array.

For sparse arrays (e.g. [1, 2, , 4]), the empty values should be ignored while traversing the array (i.e. they should not be in the resulting array).

Implement Array.prototype.filter. To avoid overwriting the actual Array.prototype.filter which is being used by the autograder, we shall instead implement it as Array.prototype.myFilter.

Examples
[1, 2, 3, 4].myFilter((value) => value % 2 == 0); // [2, 4]
[1, 2, 3, 4].myFilter((value) => value < 3); // [1, 2]
Notes
The filter callback function takes in more than just the element! There's also a second parameter for Array.prototype.filter as well. You are recommended to read the specification for Array.prototype.filter on MDN Docs before attempting. */

interface Array<T> {
  myFilter(
    callbackFn: (value: T, index: number, array: Array<T>) => boolean,
    thisArg?: this
  ): Array<T>;
}

interface Array<T> {
  myFilter(
    callbackFn: (value: T, index: number, array: Array<T>) => boolean,
    thisArg?: this
  ): Array<T>;
}

Array.prototype.myFilter = function (callbackFn, thisArg) {
  if (!Array.isArray(this)) {
    throw new TypeError('FIlter must be run on array');
  }

  const arr = [];

  for (let i = 0; i < this.length; i++) {
    if (callbackFn.call(thisArg, this[i], i, this)) {
      //@ts-ignore
      arr.push(this[i]);
    }
  }

  return arr;
};

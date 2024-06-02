/* Implement a function compact(array) that creates an array with all falsey values removed. The values false, null, 0, '', undefined, and NaN are falsey (you should know this by heart!).

Arguments
array (Array): The array to compact.
Returns
(Array): Returns the new array of filtered values.

Examples
compact([0, 1, false, 2, '', 3, null]); // => [1, 2, 3]
compact(['hello', 123, [], {}, function () {}]); // => ['hello', 123, [], {}, function() {}]
Resources
Lodash _.compact */

export default function compact<T>(
  array: Array<T | null | undefined | false | 0 | "">,
): Array<T> {
  return array?.filter?.((i) => Boolean(i));
}

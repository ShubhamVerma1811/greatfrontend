/* Sometimes it's helpful to ensure a function runs only once during the lifecycle of the website, e.g. for setting up logging, initializing an environment, etc.

Implement a function that accepts a callback and restricts its invocation to at most once. Subsequent calls of the function will return the result of the first invocation of the callback function. The callback function is invoked with the this binding and arguments of the created function.

Examples
let i = 1;

function incrementBy(value) {
  i += value;
  return i;
}

const incrementByOnce = once(incrementBy);
incrementByOnce(2); // i is now 3; The function returns 3.
incrementByOnce(3); // i is still 3; The function returns the result of the first invocation, which is 3.
i = 4;
incrementByOnce(2); // i is still 4 as it is not modified. The function returns the result of the first invocation, which is 3.
Resources
Lodash _.once */

type Fn<T> = (this: any, args: Array<any>) => T;

export default function once<T>(func: Fn<T>): Fn<T> {
  let done = false;
  let res: T | undefined = undefined;

  return function (...args: Array<any>): T {
    if (done) return res as T;
    done = true;
    res = func.call(this, ...args);
    return res as T;
  };
}
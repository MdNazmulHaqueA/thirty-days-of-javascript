// Given an integer n, return a counter function. This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).

// Solution --> Closure
// Approach
// One way to implement this function is to use a closure - we define an outer function that takes the initial count as a parameter, and returns an inner function that increments and returns the count on each call. The inner function has access to the count variable of the outer function, and since the outer function has already returned, the inner function's closure retains a reference to the count variable. This allows the inner function to maintain the state of the count between calls.

function createCounter(n) {
  return function ()  {
    return n++;
  };
}

let counter = createCounter(10);
console.log(counter());
console.log(counter());
console.log(counter());


// Complexity
// The time and space complexity of this implementation of the counter function are both constant - O(1). The createCounter function initializes a single variable count to the input start value, which takes constant time and space. The inner function returns the current value of count and increments it by one, which also takes constant time and space. Since there are no loops or recursive calls in the implementation, the time and space complexity remain constant regardless of the number of calls to the counter function.

// Write a function createCounter.
// It should accept an initial integer init. It should return an object with three functions.

// The three functions are:

// increment() increases the current value by 1 and then returns it.
// decrement() reduces the current value by 1 and then returns it.
// reset() sets the current value to init and then returns it.

/*
Approach
The createCounter function uses a closure to create a private count variable that is initialized to either the provided init value or 0 if no value is provided. It then defines three inner functions (increment, decrement, and reset) that operate on this count variable and return its new value. Finally, it returns an object containing these three functions as properties, providing a public interface for manipulating the count.

Complexity
Time complexity:
The createCounter function has a space complexity of O(1) as it creates a fixed number of variables (count, increment, decrement, reset) that are not dependent on the size of the input

Space complexity:
Each instance of the counter object created by createCounter has a space complexity of O(1) as well, as it only contains three function properties and the count variable, which are all fixed-size.

*/

// const createCounter = init => {
//   let count = init || 0;
//   const increment = () => {
//     count++;
//     return count;
//   };
//   const decrement = () => {
//     count--;
//     return count;
//   };
//   const reset = () => {
//     count = init || 0;
//     return count;
//   };
//   return { increment, decrement, reset };
// };

const createCounter = function(init) {
   let presentCount = init
   return {
       increment:()=> ++presentCount,
       decrement:()=> --presentCount,
       reset:()=> presentCount = init,
   }
};

const counter = createCounter(5);
console.log(counter.increment()); // 6
console.log(counter.reset()); // 5
console.log(counter.decrement()); // 4
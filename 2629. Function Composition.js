// Given an array of functions [f1, f2, f3, ..., fn], return a new function fn that is the function composition of the array of functions.

// The function composition of [f(x), g(x), h(x)] is fn(x) = f(g(h(x))).

// The function composition of an empty list of functions is the identity function f(x) = x.

// You may assume each function in the array accepts one integer as input and returns one integer as output.


const compose = function(functions) {
	if (functions.length === 0) {
    return function(x) { return x; };
  }
  return functions.reduceRight(function(prevFn, nextFn) {
    return function(x) {
      return nextFn(prevFn(x));
    };
  });
};

const fn = compose([x => x + 1, x => 2 * x]);
console.log(fn(4)); // 9



// O(1) space complexity
// const compose = function(functions) {
//    if (functions.length === 0) {
//      return function(x) { return x; };
//    }
   
//    return function(x) {
//      let result = x;
//      for (let i = functions.length - 1; i >= 0; i--) {
//        result = functions[i](result);
//      }
//      return result;
//    }
//  };
 
//  const fn = compose([x => x + 1, x => 2 * x]);
//  console.log(fn(4)); // 9



// using for loop

// var compose = function (functions) {
//    return function (x) {
//       for (let i = functions.length - 1; i >= 0; i--) {
//           x = functions[i](x);
//       }
//       return x;
//    };
// };



// Intuition
// The compose function takes an array of functions and returns a new function that applies each function in the array, from right to left, to the input value. This is useful when we want to apply a series of transformations to some input data.

// Approach
// The compose function first checks if the input array is empty, and returns a function that simply returns its input if it is. Otherwise, it uses the reduceRight method of the array to apply the functions in reverse order. reduceRight is used instead of reduce to ensure that the functions are applied from right to left.

// What is Composition
// Composition simply means the combination of two or more functions to form a new function. When you compose two functions, you apply one function to the output of the other function.

// For example, if you have two functions f(x) and g(x), their composition would be (f∘g)(x) = f(g(x)). This means that you first apply the function g(x) to the input x, and then apply the function f(x) to the output of g(x).

// Complexity
// Time complexity:
// O(n), where n is the number of functions in the input array.

// Space complexity:
// O(n), because it creates a new function for each function in the input array.

// What is ReduceRight
// reduceRight is a method available on arrays in JavaScript.
// It works like the reduce method, but starts from the right-hand side of the array instead of the left.
// It takes a callback function as its first argument, which takes two arguments: the accumulator and the current value.
// The callback function is called once for each element in the array, in reverse order.
// Here's an example code for reduceRight to explain how it works:

// const arr = [1, 2, 3, 4, 5];

// const sum = arr.reduceRight((prev, curr) => {
//   return prev + curr;
// });

// console.log(sum); // Output: 15

// In this example, the reduceRight method is used to compute the sum of the elements of an array in reverse order. The function passed to reduceRight takes two arguments: prev and curr, which represent the previous accumulated result and the current element of the array, respectively.
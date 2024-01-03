// Write a function argumentsLength that returns the count of arguments passed to it.
 

// Example 1:

// Input: args = [5]
// Output: 1
// Explanation:
// argumentsLength(5); // 1

// One value was passed to the function so it should return 1.


const argumentsLength = function(...args) {
    return args.length;
};
console.log(argumentsLength(5));


// Intuition
// The goal of this code is to create a function called argumentsLength that takes any number of arguments and returns the length of the arguments array.

// Approach
// The argumentsLength function is using the rest parameter syntax (...args) to collect all the arguments passed to the function into an array called args. The length of this array is then returned.

// Complexity
// Time complexity: O(1)O(1)O(1), as the length of the array can be obtained in constant time.
// Space complexity: O(n)O(n)O(n), where n is the number of arguments passed to the function. The array args will consume space proportional to the number of arguments.
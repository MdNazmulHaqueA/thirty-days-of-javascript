// Given an integer array nums, a reducer function fn, and an initial value init, return the final result obtained by executing the fn function on each element of the array, sequentially, passing in the return value from the calculation on the preceding element.

// This result is achieved through the following operations: val = fn(init, nums[0]), val = fn(val, nums[1]), val = fn(val, nums[2]), ... until every element in the array has been processed. The ultimate value of val is then returned.

// If the length of the array is 0, the function should return init.

// Please solve it without using the built-in Array.reduce method.

// nums = [1,2,3,4]
// fn = function sum(accum, curr) { return accum + curr; }
// init = 0
// Output: 10

// with reduce method

// var reducedArr = arr => {
//   return arr.reduce((acc, val) => {
//     return acc + val;
//   }, 0);
// };
// console.log(reducedArr([1, 2, 3, 4]));


// var reduce = function(nums, fn, init) {
//   let val = init;
//   for (let i = 0; i < nums.length; i++) {
//     val = fn(val, nums[i]);
//   }
//   return val;
// };



const reduce = (nums, fn, init) => {
  let val = init;
  for (let i = 0; i < nums.length; i++) {
    val = fn(val, nums[i]);
  }
  return val;
};

let fn = function sum(acc, curr) {
  return acc + curr;
};
console.log(reduce([1, 2, 3, 4, 5], fn, 0));

// console.log(reduce([1, 2, 3, 4, 5], reducer, 0));

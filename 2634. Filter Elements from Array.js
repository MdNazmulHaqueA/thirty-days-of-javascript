// Given an integer array arr and a filtering function fn, return a filtered array filteredArr.

// The fn function takes one or two arguments:

// arr[i] - number from the arr
// i - index of arr[i]
// filteredArr should only contain the elements from the arr for which the expression fn(arr[i], i) evaluates to a truthy value. A truthy value is a value where Boolean(value) returns true.

// Please solve it without the built-in Array.filter method.

const filter = (arr, fn) => {
  let filteredArr = [];
  for (let i = 0; i < arr.length; i++) {
    fn(arr[i],i) && filteredArr.push(arr[i]);
  }
  return filteredArr;
};

const filterFn = (el, i) => el > 10;
console.log(filter([0, 10, 20, 30], filterFn));

// using aray.reduce
// const filter = function(arr, fn) {
//   return arr.reduce((result, value, index) => {
//     if (fn(value, index)) {
//       result.push(value);
//     }
//     return result;
//   }, []);
// };

// Using filter

// const filteredArray = (arr,fn) => arr.filter(fn);
// const filterFn = (el, i) => el > 10;
// console.log(filteredArray([0, 5, 25, 10, 20, 30], filterFn));

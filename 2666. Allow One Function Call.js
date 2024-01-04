// Given a function fn, return a new function that is identical to the original function except that it ensures fn is called at most once.

// The first time the returned function is called, it should return the same result as fn.
// Every subsequent time it is called, it should return undefined.



var once = function(fn) {

   let hasBeenCalled = false;
   let result;
   return function(...args) {
     if (!hasBeenCalled) {
       result = fn(...args);
       hasBeenCalled = true;
       return result;
     }
   }
 };
 
 let fn = (a,b,c) => (a + b + c);
 let onceFn = once(fn);
 
 console.log(onceFn(1,2,3)); // 6
 console.log(onceFn(2,3,6)); // undefined



// Intuition
// The problem is asking us to return a new function that behaves differently depending on whether it has been called before. If it has not been called before, it should call the original function and return its result. If it has been called before, it should return undefined without calling the original function again.

// Approach
// To solve this problem, we can return a new function that keeps track of whether it has been called before. We can do this by using a closure to store a boolean flag that is initially set to false. The first time the new function is called, we call the original function and set the flag to true. We also store the result of the original function. Subsequent calls to the new function simply return undefined without calling the original function again.

// Complexity
// Time complexity:
// O(1) for both the first and subsequent calls to the returned function. This is because checking the hasBeenCalled flag and returning either the result or undefined are constant-time operations.

// Space complexity:
// O(1) as well. This is because we only use a constant amount of extra space to store the hasBeenCalled flag and the result of the original function.

// Learning
// The key idea behind this problem is to use a closure to store the state of the returned function. By doing this, we can keep track of whether the function has been called before and behave accordingly.




// Using a closure and an arrow function
// In this approach, we use an arrow function to create the returned function. We store the hasBeenCalled flag and result in a closure, and use an if statement to check whether the function has already been called.

// function once(fn) {
//   let hasBeenCalled = false;
//   let result;

//   return (...args) => {
//     if (!hasBeenCalled) {
//       result = fn(...args);
//       hasBeenCalled = true;
//       return result;
//     } else {
//       return undefined;
//     }
//   };
// }





// Intuition:
// We can keep a boolean which can track if a function is called or not

// Explanation:
// The returned function uses a Closure to keep track of whether fn has already been called. The usedOnce variable is initially set to false, indicating that fn has not yet been called.
// When the returned function is called for the first time, it sets usedOnce to true, calls fn with the input arguments args, stores the result in the result variable, and returns the result.
// When the returned function is called subsequent times, it simply returns undefined, since fn has already been called and its result has been stored in result.
// The use of the rest parameter ...args allows the returned function to accept any number of arguments, which are then passed to fn.
// To be more clear, ...args represents the input arguments that are passed to the returned function. The use of the spread syntax allows the function to accept any number of input arguments, which are then passed as an array to the fn function using the spread syntax ...args.
// For example, if you call the returned function with myFunc(1, 2, 4), the ...args syntax will convert the input arguments into an array [1, 2, 4] that can be passed to the fn function using the spread syntax ...args.
// Dry Run is given after the solution part :)



// var once = function(fn) {
//    let usedOnce = false;
//    let result;
 
//    return function(...args) {
//      if (!usedOnce) {
//        result = fn(...args);
//        usedOnce = true;
//        return result;
//      }
//      return undefined;
//    };
//  };
 
 /**
  * let fn = (a,b,c) => (a + b + c)
  * let onceFn = once(fn)
  *
  * onceFn(1,2,3); // 6
  * onceFn(2,3,6); // returns undefined without calling fn
  */
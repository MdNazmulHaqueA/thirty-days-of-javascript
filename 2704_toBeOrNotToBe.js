// refactored code
let expect = function (val) {
  const throwError = errorMessage => {
    throw new Error(errorMessage);
  };
  const toBe = a => val === a || throwError('Not Equal');
  const notToBe = a => val !== a || throwError('Equal');
  return { toBe, notToBe };
};

console.log(expect(5).toBe(5));
console.log(expect(5).notToBe(7));

// initial 
// let expect = function (val) {
//    const toBe = a => {
//      if (val !== a) throw new Error('Not Equal');
//      return true;
//    };

//    const notToBe = a => {
//      if (val === a) throw new Error('Equal');
//      return true;
//    };

//    return { toBe, notToBe };
//  };

//  console.log(expect(5).toBe(5));
//  console.log(expect(5).notToBe(7));
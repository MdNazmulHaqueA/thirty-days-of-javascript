let createHelloWorld = function () {
  return function (...args) {
    return 'Hello World';
  };
};

const f = createHelloWorld([{},null,42]);
const f1 = createHelloWorld([]);
console.log(f());
console.log(f1());
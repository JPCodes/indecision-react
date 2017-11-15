// function square(x) {
//   return x * x;
// };
//
// const squareC = function(x) {
//   return x * x;
// };

// const squareArrow = (x) => {
//   return x * x;
// }

// const squareArrow = (x) => x * x;
//
// console.log(squareArrow(10));

const firstNameArrow = (fullName) => {
  return fullName.split(' ')[0];
};

const firstNameArrowExp = (fullName) => fullName.split(' ')[0];

console.log(firstNameArrow('Jay P'));
console.log(firstNameArrowExp('Not Jay P'));

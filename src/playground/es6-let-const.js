var nameVar = 'JP';
nameVar = 'notJP';
console.log('nameVar', nameVar);

let nameLet = 'JPPPP';
nameLet = 'jpppp';
console.log('nameLet', nameLet);

const nameConst = 'JP const';
console.log('nameConst', nameConst);

// Block Scoping

const fullName = 'Jim P';

if (fullName) {
  var firstName = fullName.split(' ')[0]; // var is available outside of block, but not const or let
  console.log(firstName);
}

console.log(firstName);

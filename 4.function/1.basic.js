function add(num1, num2) {
  console.log('funciton');
  return num1 + num2;
}

const result = add(1, 2);
console.log(result);

function fullName(firstName, lastName) {
  return `${firstName} ${lastName} !`;
}

let lastName = '김';
let firstName = '지수';
console.log(fullName(firstName, lastName));

let lastName2 = '박';
let firstName2 = '철수';
console.log(fullName(firstName2, lastName2));

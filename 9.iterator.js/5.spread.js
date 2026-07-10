// Spread 연산자, 전개 구문
// 모든 Iterable 은 Spread 될 수 있다.
// 순회가 가능한 모든 것들은 촤르르르륵 펼쳐 질 수 있다.
// function(... iterable)
// [...iterable]
// {...obj}
// Spread 연산자는 EcmaScript 2018 에 추가. 이전 버전 브라우저에서는 호환 안 될 수 있다.

function add(a, b, c) {
  return a + b + c;
}

const nums = [1, 2, 3];
console.log(add(...nums)); // 배열 nums 를 펼쳐서 a=1, b=2, c=3 으로 add 인자 전달

// Rest Parameters
// nums 는 배열

function sum(first, second, ...nums) {
  console.log(nums);
}

sum(1, 2, 0, 1, 2, 4);

// Array Concat
const fruits1 = ['apple', 'kiwi'];
const fruits2 = ['strawberry', 'banana'];

let arr = fruits1.concat(fruits2); // fruit1 과 fruit2를 합친 새 배열 생성
console.log(arr);

arr = [...fruits1, 'strawberry', ...fruits2]; // fruit1 과 'strawberry' 와 fruit2를 합친 새 배열 생성
console.log(arr);

// Object
const ellie = { name: 'Ellie', age: 20, home: { address: 'home' } };
const updated = {
  ...ellie, // ellie 객체의 멤버를 복사해 updated 객체의 멤버로 추가. home 멤버는 객체라 shallow copy
  job: 'sw engineer',
};

console.log(ellie);
console.log(updated);
ellie.home.address = 'nohome';
console.log(ellie);
console.log(updated);

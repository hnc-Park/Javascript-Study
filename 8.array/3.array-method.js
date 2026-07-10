// 배열의 함수들
// 배열 자체를 변경 ? or 기존 배열 그대로, 새로운 배열 반환 ?

const fruits = ['banana', 'apple', 'lemon'];

// Array. : static method
// 배열인지 체크
console.log(Array.isArray(fruits));
console.log(Array.isArray({}));

// 특정 아이템의 위치를 찾을때
console.log(fruits.indexOf('apple'));

// 배열 안에 특정한 아이템이 있는지 체크
console.log(fruits.includes('apple'));

// 추가 - 제일 뒤
let length = fruits.push('peach'); // 배열 자체를 수정
console.log(fruits);
console.log(length);

// 추가 - 제일 앞
length = fruits.unshift('starwberry'); // 배열 자체를 수정
console.log(fruits);
console.log(length);

// 제거 - 제일 뒤
let lastItem = fruits.pop(); // 배열 자체를 수정
console.log(fruits);
console.log(lastItem);

// 제거 - 제일 앞
lastItem = fruits.shift(); // 배열 자체를 수정
console.log(fruits);
console.log(lastItem);

// 중간에 추가 또는 삭제
const deleted = fruits.splice(1, 1); // 배열 자체를 수정
console.log(fruits);
console.log(deleted);
fruits.splice(1, 0, 'berry', 'grapes'); // 배열 자체를 수정
console.log(fruits);
fruits.splice(1, 1, 'berry', 'grapes'); // 배열 자체를 수정
console.log(fruits);

// 잘라진 새로운 배열을 만듬
let newArr = fruits.slice(0, 2);
console.log(newArr);
console.log(fruits);
newArr = fruits.slice(1);
console.log(newArr);
newArr = fruits.slice(-1);
console.log(newArr);

// 여러개의 배열을 붙여줌
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = arr1.concat(arr2);
console.log(arr1);
console.log(arr2);
console.log(arr3);

// 순서를 거꾸로
const arr4 = arr3.reverse();
console.log(arr4);
console.log(arr3);

// 중첩 배열을 하나의 배열로 펴기
let arr = [
  [1, 2, 3],
  [4, [5, 6, [3, 4]]],
];
console.log(arr);
console.log(arr.flat());
console.log(arr.flat(2));
console.log(arr.flat(3));

// arr.flat 은 arr 은 그대로. 새 배열 만듦.
arr = arr.flat(3);

// 특정한 값으로 배열을 채우기
arr.fill(0); // 배열 자체를 수정
console.log(arr);

arr.fill('s', 1, 3);
console.log(arr);

arr.fill('a', 1);
console.log(arr);

// 배열을 문자열로 합하기
let text = arr.join();
console.log(text);

text = arr.join(' | ');
console.log(text);

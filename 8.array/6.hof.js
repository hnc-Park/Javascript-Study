const fruits = ['banana', 'strawberry', 'grape', 'strawberry'];

// forEach 는 배열의 고차함수
// 배열 전체 순환하며 원소 각각 마다 전달 받은 action (콜백 함수) 수행
// 콜백함수는 value , index, array 를 전달받는 함수
fruits.forEach(function (value, index, array) {
  console.log('----------------------');
  console.log(value); // 원소의 값
  console.log(index); // 원소의 index
  console.log(array); // 배열
});

fruits.forEach((value) => console.log(value));

// forEach 는 아래와 유사하게 구현
// function forEach(array, action) {
//   for (let i = 0; i < array.length; i++) {
//     action(array[i]);
//   }
// }

// 콜백함수의 item 인자 : 배열의 각 원소

// 조건 (콜백함수) 에 맞는 아이템을 찾을 때
// find : 조건에 맞는 첫번째 아이템 반환하는 고차함수
// 콜백 함수는 True / False 를 리턴하는 함수
const item1 = { name: 'milk', price: 2 };
const item2 = { name: 'cookie', price: 3 };
const item3 = { name: 'onigiri', price: 1 };

const products = [item1, item2, item3, item2];

let result = products.find((item) => item.name === 'cookie');
console.log(result);

// findIndex : 조건에 맞는 첫번째 아이템의 인덱스를 반환하는 고차함수
result = products.findIndex((item) => item.name === 'cookie');
console.log(result);

// some : 배열의 아이템들이 부분적으로 조건(콜백함수)에 맞는지 true/false 반환 하는 고차함수
result = products.some((item) => item.name === 'cookie');
console.log(result);

// every : 배열의 아이템들이 모두 조건(콜백함수)에 맞는지 true/false 반환 하는 고차함수
result = products.every((item) => item.name === 'cookie');
console.log(result);

// filter : 조건(콜백함수)에 맞는 모든 아이템들을 새로운 배열로 리턴하는 고차함수
result = products.filter((item) => item.name === 'cookie');
console.log(result);

console.clear();

// Map : 배열의 아이템들을 각각 다른 아이템으로 변환 후 , 새로운 배열 생성해 리턴하는 고차함수

const nums = [1, 2, 3, 4, 5];
result = nums.map((item) => item * 2);
console.log(result);

result = nums.map((item) => {
  if (item % 2 == 0) {
    return item * 2;
  } else {
    return item;
  }
});

console.log(result);

// Flatmap : 중첩 배열을 모두 펴서 새로운 배열로 리턴하는 고차함수

result = nums.map((item) => [1, 2]);
console.log(result);

result = nums.flatMap((item) => [1, 2]);
console.log(result);

//  text.split('') : text 문자열을 각 문자로 쪼갬
result = ['dream', 'coding'].flatMap((text) => text.split(''));
console.log(result);

// sort : 배열의 아이템들을 정렬
// 문자열 형태의 오름차순으로 요소 정렬하고 기존의 배열을 변경
const texts = ['hi', 'abc'];
texts.sort();
console.log(texts);

const numbers = [0, 5, 4, 2, 1, 10];
numbers.sort();
console.log(numbers);

// 숫자 값 기준으로 크기 비교해 정렬하기
// 콜백함수(a,b) : a < b ( < 0 리턴 ) a가 앞으로 정렬 오름차순
// 콜백함수(a,b) : a > b ( > 0 리턴 ) b가 앞으로 정렬 내림차순
numbers.sort((a, b) => a - b);
console.log(numbers);

// reduce : 배열의 요소들을 모두 모아 하나로 만들어 리턴
// 콜백함수 : sum = return 값, value = 각 원소 , sum을 만드는 계산식, sum 초기값(0)
result = [1, 2, 3, 4, 5].reduce((sum, value) => (sum += value), 0);
console.log(result);

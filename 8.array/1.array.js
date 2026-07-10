// 배열 생성 방법
let array = new Array(2); // 크기가 2인 빈 배열
console.log(array);

array = new Array(1, 2, 3); // [1,2,3] 배열
console.log(array);

array = Array.of(1, 2, 3, 4, 5); // [1,2,3,4,5] 배열
console.log(array);

const anotherArray = [1, 2, 3, 4]; // [1,2,3,4] 배열
console.log(anotherArray);

array = Array.from(anotherArray); // anotherArray 와 같은 원소를 갖는 새로운 배열
console.log(array);

// 일반적으로 배열은 동일한 메모리 크기를 갖는 원소들이 연속적으로 이어져 있어야 하나
// 자바스크립트에서의 배열은 연속적으로 이어져 있지 않을 수 있다.
// 자바스크립트의 배열은 Object 의 일종일 뿐이다.
// 자바스크립트의 배열은 일반적인 배열의 동작을 흉내낸 특수한 객체다.
// 이를 보완하는 타입이 정해져 있는 타입 배열 Typed Collections 가 있다.

array = Array.from({
  0: '안', // key 0 : 0번 index
  1: '녕', // key 1 : 0번 index
  length: 2, // key length : 배열 원소 개수
});

console.log(array);

// 주어진 배열에서 중복 제거
const fruits = ['banana', 'apple', 'grape', 'banana', 'apple', 'peach'];
// ['banana', 'apple', 'grape', 'peach']

// const temp = new Set(fruits);
// const res = [];
// for (item of temp.values()) {
//   res.push(item);
// }

// console.log(res);

function removeDuplication(array) {
  return [...new Set(array)]; // Set 의 원소 펼쳐 배열로 생성
}

console.log(removeDuplication(fruits));

// 주어진 두 세트의 공통된 아이템만 담은 세트 만들기
const set1 = new Set([1, 2, 3, 4, 5]);
const set2 = new Set([1, 2, 3]);

// let arr = [];
// for (item of set1.values()) {
//   if (set2.has(item)) {
//     arr.push(item);
//   }
// }

// const set3 = new Set(arr);

// console.log(set3);

function findIntersection(set1, set2) {
  const array = [...set1].filter((item) => set2.has(item));
  return new Set(array);
}

console.log(findIntersection(set1, set2));

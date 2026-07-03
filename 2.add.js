const fruits = ['banana', 'apple', 'grapes', 'peach'];

// 배열 아이템을 참조하기
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);
console.log(fruits.length);

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// 권장하지 않는 원소 추가 / 삭제

fruits[6] = 'strawberry';
console.log(fruits);

delete fruits[1];
console.log(fruits);

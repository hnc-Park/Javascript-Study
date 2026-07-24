// Set 는 배열로 부터 초기화
const set = new Set([1, 2, 3]);
console.log(set);

// 사이즈 확인
console.log(set.size);

// 원소 존재 확인
console.log(set.has(2));
console.log(set.has(6));

// 순회
// Set 은 Iterable 객체
set.forEach((item) => console.log(item));
for (const value of set.values()) {
  console.log(value);
}

// 추가
set.add(6);
console.log(set);
// 중복 불허
set.add(6);
console.log(set);

// 삭제
set.delete(6);
console.log(set);

// 모두 삭제
set.clear();
console.log(set);

// 오브젝트를 원소로 갖는 Set
const obj1 = { name: 'apple', price: 8 };
const obj2 = { name: 'banana', price: 5 };
const objs = new Set([obj1, obj2]);
console.log(objs);

// reference
obj1.price = 10;
objs.add(obj1);
console.log(objs);

// shallow copy
const obj3 = { name: 'banana', price: 5 }; // obj2 와는 별개의 객체 obj3
objs.add(obj3);
console.log(objs);
obj3.price = 8;
console.log(objs);

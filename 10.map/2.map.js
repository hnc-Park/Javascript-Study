const map = new Map([
  ['key1', 'apple'],
  ['key2', 'banana'],
]);

console.log(map);

// 사이즈 확인
console.log(map.size);

// 존재하는지 확인
console.log(map.has('key1'));
console.log(map.has('key6'));

// 순회
map.forEach((value, key) => console.log(key, value));
console.log(map.keys());
console.log(map.values());
console.log(map.entries());

// 찾기
console.log(map.get('key1'));
console.log(map.get('key2'));
console.log(map.get('key4'));

// 추가
map.set('key3', 'kiwi');
console.log(map);

// 삭제
map.delete('key3');
console.log(map);

// 전부 삭제
map.clear();
console.log(map);

console.clear();

// map 과 Object 는 거의 동일
// 차이점
const key = { name: 'milk', price: 10 };
const milk = { name: 'milk', price: 10, description: '맛있는 우유' };
const obj = {
  // key 객체를 key , milk 객체를 value 로 갖는 멤버를 갖는 obj 객체
  [key]: milk,
};

console.log(obj);

// key 객체를 key , milk 객체를 value 로 갖는 멤버를 갖는 map2 map객체
const map2 = new Map([key, milk]);

console.log(map2);

// key객체로 key  접근
console.log(obj[key]);
// console.log(map2[key]); map 에서는 불가능
console.log(map2.get(key));

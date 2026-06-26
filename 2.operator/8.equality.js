// 동등 비교 관계 연산자 Equality Operators
// == 값이 같음
// != 값이 다름
// === 값과 타입이 둘다 같음
// !== 값과 타입이 다름

console.log(2 == 2);
console.log(2 != 2);
console.log(2 != 3);
console.log(2 == 3);
console.log(2 == '2');
console.log(2 === '2');
console.log(true == 1);
console.log(true === 1);
console.log(false == 0);
console.log(false === 0);

console.clear();

const obj1 = {
  // {} creates new object e.g. 0x1111
  name: 'js',
};

const obj2 = {
  // {} creates new object e.g. 0x1112
  name: 'js',
};

console.log(obj1 == obj2);
console.log(obj1 === obj2);
console.log(obj1.name == obj2.name); // same value (js)
console.log(obj1.name === obj2.name); // same type (문자열) &&  same value (js)

let obj3 = obj2; // obj3,obj2 모두 0x1112 주소 값을 갖는다.
console.log(obj2 == obj3); // same value (주소값)
console.log(obj2 === obj3); // same type (주소Type) &&  same value (주소값)

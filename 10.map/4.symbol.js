// Symbol 심볼

// 동일한 문자열에 대해 서로 다른 유일한 키 생성 가능

const map = new Map();

// key1 과 key2 는 동일 문자열을 갖는 변수. 동일한 키로서 동작
// let key1 = 'key';
let key2 = 'key';

// key1 과 key2 는 동일 문자열을 갖는 Symbol. 별개의 키로서 동작
key1 = Symbol('key');
key2 = Symbol('key');

map.set(key1, 'Hello');

console.log(map.get(key2));
console.log(key1 === key2);

// 동일한 문자열로 하나의 키를 사용하고 싶다면 Symbol.for
// 전역 심볼 레지스트리 ( Global Symbol Registry ) 에 문자열 저장. 심볼 매핑

const k1 = Symbol.for('key');
const k2 = Symbol.for('key');

console.log(k1 === k2);

// Symbol.for 키 찾기 : keyFor
console.log(Symbol.keyFor(k1));
console.log(Symbol.keyFor(key1));

const obj = { [k1]: 'Hello', [Symbol('key')]: 1 };
console.log(obj);
console.log(obj[k1]);
console.log(obj[Symbol('key')]);

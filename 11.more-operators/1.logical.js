// 논리 연산자 Logical Operators
// && 그리고
// || 또는
// 단축 평가 Short Circuit Evaluation

const obj1 = { name: 'dog' };
const obj2 = { name: 'cat', owner: 'Ellie' };

if (obj1 || obj2) {
  console.log('둘다 true');
}

// obj1 == true 면 obj2 를 result 에 대입
let result = obj1 && obj2;
console.log(result);

// obj1 == true 면 obj1 이 바로 result 에 대입
result = obj1 || obj2;
console.log(result);

// 활용 예
// 조건이 truthy 일때 && 무언가를 해야 할 경우
// 조건이 falshy 일대 || 무언가를 해야 할 경우

function changeOwner(animal) {
  if (!animal.owner) {
    throw new Error('주인 없어');
  }
  animal.owner = '바뀐 주인';
}

function makeNewOwner(animal) {
  if (animal.owner) {
    throw new Error('주인 있어');
  }
  animal.owner = '새로운 주인';
}

obj1.owner && changeOwner(obj1);
obj2.owner && changeOwner(obj2);

console.log(obj1);
console.log(obj2);

obj1.owner || makeNewOwner(obj1);
obj2.owner || makeNewOwner(obj2);

console.log(obj1);
console.log(obj2);

// 객체 멤버가 null 또는 undefined 인 경우를 확인
let item = { price: 1 };
const price = item && item.price;
console.log(price);

// 기본값을 설정
// default parameter :  전달하지 않거나 undefined 설정 시 동작
// || 값이 falshy 한 경우 설정 : 0, -0, null, undefined , ''
function print1(message) {
  const text = message || 'Hello';
  console.log(text);
}

print1();
print1(undefined);
print1(null);
print1(0);

function print2(message = 'Hello') {
  const text = message;
  console.log(text);
}

print2();
print2(undefined);
print2(null);
print2(0);

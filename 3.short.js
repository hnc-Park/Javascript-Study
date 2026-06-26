const x = 0;
const y = 0;

// Same
const coordinate1 = { x, y };
const coordinate2 = { x: x, y: y };

console.log(coordinate1);
console.log(coordinate2);

// 객체 만들어 리턴하는 함수
function makeObj(name, age) {
  return {
    name,
    age,
  };
}

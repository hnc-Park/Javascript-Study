// 함수 선언문 function name(parameters) {body}

// 함수 표현식 const name = function (params) {body}
let add = function (a, b) {
  return a + b;
}; // 익명함수를 add 변수에 저장

console.log(add(1, 2));

// 화살표 함수 const name = (params) => {body}

add = (a, b) => {
  return a + b;
};

console.log(add(1, 2));

// 화살표 함수 body 에서 return 만 수행 시
add = (a, b) => a + b;

console.log(add(1, 2));

// 생성자 함수 const object = new Function();

//IIFE (Immediately Invoked Function Expressions)
// 함수 : 객체 , (함수) : 함수의 주소, (함수)() : 함수 호출
(function run() {
  console.log('H');
})();

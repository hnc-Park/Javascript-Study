// Nullish Operator
// ?? : null , undefined 인 경우에만 후방 구문 실행
// || : falshy (0,-0,'',null,undefined) 인 경우에 후방 구문 실행

let num = 0;

console.log(num || '-1');
console.log(num ?? '-1');

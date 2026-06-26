// 논리연산자 Logical Operators
// && 그리고
// || 또는
// !부정
// !! 불리언 값으로 변환

let num = 8;
if (num >= 0 || num > 20) {
  console.log('Right1');
}

if (num >= 0 && num > 20) {
  console.log('Right2');
}

if (!(num >= 0 && num > 20)) {
  console.log('Right3');
}

if (num != 9) {
  console.log('Right4');
}

console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);

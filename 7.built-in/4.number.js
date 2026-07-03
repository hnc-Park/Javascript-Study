const num1 = 123; // number primitive value
const num2 = new Number(123); // Number Wrapper Object

console.log(typeof num1);
console.log(typeof num2);

// Number class 의 static Property / Methods
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.NaN);
console.log(Number.NEGATIVE_INFINITY);
console.log(Number.POSITIVE_INFINITY);

if (num1 < Number.MAX_VALUE) {
}

// 상동
if (num1 === Number.NaN) {
}

if (Number.isNaN(num1)) {
}
// 상동

// Number Class 의 instance 레벨 멤버
// 지수 표기법 : 매우 크거나 작은 숫자를 10의 n승으로 표기
const num3 = 102;
console.log(num3.toExponential());

// 반올림 하여 문자열로 변환
const num4 = 1234.12;
console.log(num4.toFixed());

// 문자열 / 지역 표기법 문자열로 변환
console.log(num4.toString());
console.log(num4.toLocaleString('ar-EG'));

// 원하는 자릿수 까지 유효하도록 반올림
console.log(num4.toPrecision(5));
console.log(num4.toPrecision(4));
console.log(num4.toPrecision(2));

if (Number.EPSILON > 0 && Number.EPSILON < 1) {
  console.log(Number.EPSILON); // 0 과 1 사이에서 나타낼 수 있는 가장 작은 수
}

// 자바스크립트에서도 부동소숫점 정밀도 문제 존재
const num = 0.1 + 0.2 - 0.2;

console.log(num);

function isEqual(original, expected) {
  return Math.abs(original - expected) < Number.EPSILON;
}

console.log(isEqual(1, 1));
console.log(isEqual(0.1, 0.1));
console.log(isEqual(num, 0.1));

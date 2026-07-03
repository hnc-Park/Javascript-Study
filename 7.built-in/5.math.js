// Math
// static properties,method
// 객체 없이 Math 클래스로 접근
console.log(Math.E); // 오일러 상수
console.log(Math.PI); // PI

// 절댓값
console.log(Math.abs(-10));
// 소숫점 이하를 올림
console.log(Math.ceil(1.4));
// 소숫점 이하를 내림
console.log(Math.floor(1.4));
// 소숫점 이하를 반올림
console.log(Math.round(1.4));
console.log(Math.round(1.7));
// 정수만 반환
console.log(Math.trunc(1.5432));

// 최대,최솟값 찾기
console.log(Math.max(1, 3, 4));
console.log(Math.min(1, 3, 4));

// 거듭제곱
console.log(3 ** 2);
console.log(Math.pow(3, 2));

// 제곱근
console.log(Math.sqrt(9));

// 0~1 사이의 랜덤 값
console.log(Math.random());

// 1~10 의 랜덤 정수

console.log(Math.trunc(Math.random() * 10) + 1);

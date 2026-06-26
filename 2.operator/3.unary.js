// 단항 연산자
// + 양
// - 음
// ! 부정

let a = 5;
a = -a;
console.log(a);
a = -a;
console.log(a);

a = +a;
a = -a;
a = +a;
console.log(a);

let boolean = true;
console.log(boolean);
console.log(!boolean);
console.log(!!boolean);

// + 단항 연산자는 숫자가 아닌 타입들을 숫자로 변환해줌

console.log(+false); // 0
console.log(+null); // 0
console.log(+''); // 0
console.log(+true); // 1
console.log(+'text'); // NaN
console.log(+undefined); // NaN

// !! : 값을 bool 타입으로 변환
console.log(!!1);
console.log(!!' ');

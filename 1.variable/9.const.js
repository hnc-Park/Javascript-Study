let a = 1;
a = 2;
// const : 재할당이 불가능한 변수 선언
// 1. 상수 2. 상수변수 또는 변수
const text = 'hello';

// blocked
// text = 'hi';

const MAX_FRUITS = 5;

const apple = {
  name: 'apple',
  color: 'red',
};

console.log(apple);

// blocked
// apple = {};

apple.name = 'orange';

console.log(apple);

// Object Literal {key : value}
// new Object()
// Object.create();
// key : 단순 문자, 숫자 , 문자열 '~', 심볼
// value : 원시값, 객체(함수)

// 객체 생성
let apple = {
  name: 'apple',
  'hello-bye': 'hi',
  0: 1,
  ['hello-bye1']: 'hhi',
};

// 속성(데이터) 에 접근
console.log(apple.name); // dot notation
console.log(apple['name']); // braket notation
console.log(apple['hello-bye']);
console.log(apple['hello-bye1']);
console.log(apple[0]);

// 속성 추가
apple.emoji = 'emoji';
console.log(apple.emoji);
console.log(apple['emoji']);
console.log(apple);

// 속성 삭제
delete apple.emoji;
console.log(apple);

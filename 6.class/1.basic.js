// 객체를 손쉽게 만들 수 있는 템플릿
// 1. 생성자 함수
// 2. 클래스

// 생성자 함수
// 대문자 시작 함수
// Fruit 이라는 Templated 객체 생성 함수
// function Fruit(name, emoji) {
//   this.name = name; // name key : name param
//   this.emoji = emoji; // emoji key : emoji param
//   this.display = () => {
//     // display key : function
//     console.log(`${this.name}: ${this.emoji}`);
//   };
//   // return this; // 생성자 함수에서는 JS엔진이 자동으로 생성 .생략 가능
// }

// 클래스 class
class Fruit {
  // 생성자 : new 키워드로 객체를 생성할때 호출되는 함수
  constructor(name, emoji) {
    this.name = name;
    this.emoji = emoji;
  }

  display = () => {
    console.log(`${this.name}: ${this.emoji}`);
  };
}

const apple = new Fruit('apple', 'apple1');
const orange = new Fruit('orange', 'orange1');

console.log(apple);
console.log(orange);

console.log(apple.name);
console.log(orange.name);

apple.display();

// const apple = {
//   name: 'apple',
//   display: function () {
//     // key : dispaly , value : function
//     // 객체 내 메서드가 동일 객체 내 속성 접근시 'this.속성 명' 으로 접근
//     console.log(`${this.name} : apple1`);
//   },
// };

// const orange = {
//   name: 'orange',
//   display: function () {
//     // key : dispaly , value : function
//     // 객체 내 메서드가 동일 객체 내 속성 접근시 'this.속성 명' 으로 접근
//     console.log(`${this.name} : orange1`);
//   },
// };

// 생성자 함수
// 대문자 시작 함수
// Fruit 이라는 Templated 객체 생성 함수
function Fruit(name, emoji) {
  this.name = name; // name key : name param
  this.emoji = emoji; // emoji key : emoji param
  this.display = () => {
    // display key : function
    console.log(`${this.name}: ${this.emoji}`);
  };
  // return this; // 생성자 함수에서는 JS엔진이 자동으로 생성 .생략 가능
}

const apple = new Fruit('apple', 'apple1');
const orange = new Fruit('orange', 'orange1');

console.log(apple);
console.log(orange);

console.log(apple.name);
console.log(orange.name);

apple.display();

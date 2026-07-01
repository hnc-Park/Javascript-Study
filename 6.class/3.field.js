// 클래스 class
// 접근 지정자
// private(#) , public(default) , protected
// 클래스 내부에서만 접근 가능 , 클래스 내.외부 모두 접근 가능 , 클래스와 상속 받은 자식 클래스에서만 접근 가능
class Fruit {
  #name; // 생성자에서 초기화 하는 멤버 속성은 선언 생략 가능
  #emoji;
  type = '과일'; // 생성자에서 초기화 하지 않는 멤버 속성

  constructor(name, emoji) {
    this.#name = name;
    this.#emoji = emoji;
  }

  display = () => {
    console.log(`${this.#name}: ${this.#emoji}`);
  };
}

const apple = new Fruit('apple', 'apple1');
console.log(apple);

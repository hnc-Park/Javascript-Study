// 클래스 class
class Fruit {
  static MAX_FRUITS = 4;
  // 생성자 : new 키워드로 객체를 생성할때 호출되는 함수
  constructor(name, emoji) {
    this.name = name;
    this.emoji = emoji;
  }

  // static 멤버 함수에서 Fruit 인스턴스 생성해 리턴
  static makeRandomFruit() {
    return new Fruit('banana', 'banana1');
  }

  // this.속성의 인스턴스 속성을 접근하기에 display는 인스턴스 메서드가 적합함
  display = () => {
    console.log(`${this.name}: ${this.emoji}`);
  };
}

const banana = Fruit.makeRandomFruit();
console.log(banana);
console.log(Fruit.MAX_FRUITS);

const apple = new Fruit('apple', 'apple1');
const orange = new Fruit('orange', 'orange1');

console.log(apple);
console.log(orange);

console.log(apple.name);
console.log(orange.name);

apple.display();

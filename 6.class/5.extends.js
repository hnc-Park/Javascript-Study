class Animal {
  constructor(color) {
    this.color = color;
  }

  eat() {
    console.log('먹자!');
  }

  sleep() {
    console.log('잔다');
  }
}

// Tiger 클래스는 Animal 클래스를 그대로 상속함
class Tiger extends Animal {}

// Tiger 인스턴스 생성
const tiger = new Tiger('노랑이');
console.log(tiger);
tiger.sleep();
tiger.eat();

// Dog 클래스는 Animal 클래스를 그대로 상속함
class Dog extends Animal {
  // Dog 클래스만의 생성자 (부모 클래스의 생성자 포함.)
  constructor(color, ownerName) {
    super(color); // 부모 클래스의 생성자 호출

    // Dog 만의 속성 ownerName
    this.ownerName = ownerName;
  }

  // Dog 클래스만의 play 메서드
  play() {
    console.log('놀자아~!');
  }

  // Animal 클래스의 eat 메서드를 Overriding
  // Dog 클래스의 eat 메서드는 이 메서드
  eat() {
    super.eat(); // 부모(Animal) 클래스의 eat 함수 호출
    console.log('강아지가 먹는다');
  }
}

const dog = new Dog('빨갱이', '엘리');

console.log(dog);

dog.sleep();
dog.eat();
dog.play();

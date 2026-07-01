// 0 이상의 값으로 초기화 한 뒤 하나씩 숫자를 증가할 수 있는 카운터

class Counter {
  #value;
  constructor(value) {
    if (isNaN(value) || value < 0) {
      this.#value = 0;
    } else {
      this.#value = value;
    }
  }

  get value() {
    return this.#value;
  }

  accum() {
    this.#value++;
  }

  print = () => {
    console.log(this.#value);
  };
}

const counter = new Counter(-1);

counter.accum();
counter.accum();

counter.print();

console.log(counter.value);

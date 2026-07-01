class employee {
  #name;
  #part;
  #worktime;
  #payrate;
  constructor(name, part, worktime, payrate) {
    this.#name = name;
    this.#part = part;
    this.#worktime = worktime;
    this.#payrate = payrate;
  }

  get salary() {
    return this.#payrate * this.#worktime;
  }
}

class regularEmployee extends employee {
  static #PAY_RATE = 10000;
  constructor(name, part, worktime) {
    super(name, part, worktime, regularEmployee.#PAY_RATE);
  }
}

class partEmployee extends employee {
  static #PAY_RATE = 8000;
  constructor(name, part, worktime) {
    super(name, part, worktime, partEmployee.#PAY_RATE);
  }
}

const partemployee = new partEmployee('john', 'ai', 100);
console.log(partemployee.salary);

const fullemployee = new regularEmployee('jack', 'sw', 80);
console.log(fullemployee.salary);

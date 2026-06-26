function add(a, b) {
  // return a + b;
  // return 문이 없으면 return undefined; 를 자동으로 붙여줌
}

function printnum(num) {
  if (num < 0) {
    return; // <=> return undefined; // 함수는 return 문을 만나면 종료함
  }
  console.log(num);
}

function print(text) {
  console.log(text);
}

const result = add(1, 2);
console.log(result);

print('text');

printnum(12);
printnum(-1);

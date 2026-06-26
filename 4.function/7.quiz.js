// 주어진 숫자만큼 0부터 순회하는 함수
// 순회하면서 주어진 특정한 일을 수행해야 함
// 5, 순회하는 숫자를 전부 출력
// 5, 순회하는 숫자의 두배값을 전부 출력

function print(i) {
  console.log(i);
}

function printDouble(i) {
  console.log(2 * i);
}

function iterate(max, action) {
  for (let i = 0; i < max; i++) {
    action(i);
  }
}

iterate(5, print);
iterate(5, printDouble);

iterate(5, (i) => {
  console.log(i);
});
iterate(5, (i) => {
  console.log(i * 2);
});

setTimeout(() => {
  console.log('3초뒤');
}, 3000);

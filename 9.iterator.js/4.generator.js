// generator : Iterable 객체를 생성해주는 함수

// generator
function* multipleGenerator() {
  try {
    for (let i = 0; i < 10; i++) {
      console.log(i);
      yield i * 2; // yield 는 값을 return 한다. 또한 next() 가 호출되어야 다음 코드로 진행을 계속함
    }
  } catch (error) {
    console.log(error);
  }
}

// Iterable 객체 multiple
const multiple = multipleGenerator();
let next = multiple.next();
console.log(next.value, next.done);

multiple.return(); // multiple 의 iteration 종료 ( 끝까지 순회 완료 )

// multiple.throw('Error!'); // multiple 객체 내부로 예외 전달

next = multiple.next();
console.log(next.value, next.done);

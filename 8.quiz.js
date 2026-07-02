// #1. 문자열의 모든 캐릭터를 하나씩 출력

const text = 'Hello World!';

const txtlen = text.length;

for (let i = 0; i < txtlen; i++) {
  console.log(text[i]);
}

// #2. 사용자의 id를 잘라내어 각각의 id를 배열로 보관

const ids = 'user1, user2, user3, user4';
const arr = ids.split(', ');
console.log(arr);

// #3. 1초에 한번식 시계를 (날짜포함) 출력

function printDate() {
  const now = new Date();
  console.log(now.toLocaleString('ko-KR'));
}
setInterval(printDate, 1000);

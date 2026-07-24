// count 변수는 이 JS 파일에서만 사용 가능
let count = 0;

// increase, getCount 함수는 외부에서도 사용 가능

// export default function increase() {
//   count++;
//   console.log(count);
// }

export function increase() {
  count++;
  console.log(count);
}

export function getCount() {
  return count;
}

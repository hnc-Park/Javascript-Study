// 함수 내부에서 외부에서 전달받은 인자의 값을 변경해서는 안됀다.
// 상태 변경 필요 시, 새로운 상태(객체 ,값)을 만들어서 반환해야한다.

// 함수의 인자는 함수내 새로운 지역변수
function display(num) {
  // num = 5; XX
  console.log(num);
}

const value = 4;
display(value);
console.log(value);

function displayObj(obj) {
  // obj.name = 'Bob'; XX // 외부로 부터 받은 인자는 내부에서 변경 XX
  console.log(obj);
}

const ellie = { name: 'Ellie' };
displayObj(ellie);
console.log(ellie);

function changeName(obj) {
  return { ...obj, name: 'Bob' }; // 변경 후 반환 시 새로운 오브젝트 생성
}

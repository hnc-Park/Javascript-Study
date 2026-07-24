// Optional Chaining Operator
// ES11 ECMA Script 2020
// ?.
// null 또는 undefined 확인 시 사용

let item = { price: 1 };
// const price = item && item.price;
// 위와 동일
// item 이 존재 시, item.price 접근. item 이 없으면 ( null , undefined ) item.price 접근 안함
const price = item?.price;

console.log(price);

let obj = { name: 'dog', owner: { name: '엘리' } };
function printName(obj) {
  const ownerName = obj?.owner?.name;
  console.log(ownerName);
}

printName(obj);

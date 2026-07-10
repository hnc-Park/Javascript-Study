const pizza = { name: 'pizza', price: 2, owner: { name: 'Ellie' } };
const ramen = { name: 'ramen', price: 3 };
const sushi = { name: 'sushi', price: 1 };

const store1 = [pizza, ramen]; // store1 배열은 pizza, ramen 객체를 원소로 가짐
const store2 = Array.from(store1); // store2 배열은 store1 배열로 부터 새로운 배열 생성

console.log('store1', store1);
console.log('store2', store2);

store2.push(sushi); // store1 과 store2는 별개의 배열
console.log('store1', store1);
console.log('store2', store2);

pizza.price = 4;
console.log('store1', store1);
console.log('store2', store2);

// 구조 분해 할당 Destructuring Assignment
// 데이터 뭉치 ( 그룹 ) 을 쉽게 만들 수 있다.

const fruits = ['apple', 'kiwi', 'strawberry', 'banana'];

// 배열 fruits 의 원소들을 first, second, others 배열로 받아옴
const [first, second, ...others] = fruits;

console.log(first);
console.log(second);
console.log(others);

const point = [1, 2];
const [x, y, z = 0] = point;
console.log(x);
console.log(y);
console.log(z);

function createEmoji() {
  return ['apple', 'a'];
}

const [title, emoji] = createEmoji();
console.log(title);
console.log(emoji);

// 객체 구조 분해
// { name, age, job } 으로 객체를 분해함
const ellie = { name: 'Ellie', age: 20, job: 's/w engineer' };
function display({ name, age, job }) {
  console.log(name);
  console.log(age);
  console.log(job);
}

display(ellie);

// {name,age,occupation(job 키 이명),pet(없으면 강아지 값)} 으로 객체 분해
const { name, age, job: occupation, pet = '강아지' } = ellie;
console.log(name);
console.log(age);
console.log(occupation);
console.log(pet);

// Quiz

const prop = {
  name: 'Button',
  styles: {
    size: 20,
    color: 'black',
  },
};

// styles 키 (객체) 내부의 color 키
function changeColor({ styles: { color } }) {
  console.log(color);
}

changeColor(prop);

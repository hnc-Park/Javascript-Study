// #1. 주어진 배열 안의 딸기 아이템을 키위로 교체하는 함수 만들기 ( 단, 주어진 배열 수정  X )

let input = ['banana', 'strawberry', 'grape', 'strawberry'];

let output = input.map((item) => {
  if (item == 'strawberry') {
    return 'kiwi';
  } else {
    return item;
  }
});

function replace(array, from, to) {
  return array.map((item) => (item === from ? to : item));
}

output = replace(input, 'strawberry', 'kiwi');
console.log(output);

// #2. 배열과 특정한 요소를 전달받아, 배열안에 그 요소가 몇개나 있는지 카운트 하는 함수
input = ['banana', 'kiwi', 'grape', 'kiwi'];
let num = 0;
input.forEach(
  (item) => {
    if (item === arg) {
      num++;
    }
  },
  (arg = 'kiwi'),
);

console.log(num);

function count(array, item) {
  //   return array.reduce((count, value) => {
  //     if (value === item) {
  //       count++;
  //     }
  //     return count;
  //   }, 0);

  return array.filter((value) => {
    value === item;
  }).length;
}

console.log(count(input));

// #3. 배열1, 배열2 두 개의 배열을 전달받아 배열 1 아이템 중에 배열2에 존재하는 아이템만 담고 있는 배열 반환
let input1 = ['banana', 'kiwi', 'grape'];
let input2 = ['banana', 'strawberry', 'grape', 'strawberry'];
let res = input1.filter(
  (item) => {
    if (arr2.includes(item) === true) {
      return true;
    } else {
      return false;
    }
  },
  (arr2 = input2),
);
console.log(res);

function match(input, search) {
  return input.filter((item) => search.includes(item));
}
console.log(match(input1, input2));

// #4. 5이상의 숫자들의 평균
const nums = [3, 16, 5, 25, 4, 34, 21];
let count = 0;
let result = nums.reduce((sum, value) => {
  if (value >= 5) {
    count++;
    sum += value;
    return sum;
  } else {
    return sum;
  }
}, 0);

let avg = result / count;

console.log(avg);

const avg2 = nums
  .filter((item) => {
    item > 5;
  })
  .reduce((avg, value, index, array) => {
    // 고차함수에는 기본적으로 item, index, array ( 호출하는 array 의 index번째의 item) 가 인자로 삽입된다.
    avg + value / array.length; // 평균을 구하는 다른 방법
  }, 0);

console.log(avg2);

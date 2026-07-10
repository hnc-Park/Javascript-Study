// [Symbol.iterator]() : Iterator { next() : { value , done } };
// value , done 키의 멤버 두 개를 갖는 객체를 리턴하는 next() 함수를 갖는 Iterator 객체를 리턴하는 [Symbol.iterator]() 함수를 갖는 객체 : Iterable 객체
// 0 부터 10 이하까지 숫자의 2배를 순회하는 이터레이터(반복자) 만들기

// 0, 1, 2, 3, ... 9
// 0, 2, 4, 6, ... 18

// const multiple = {
//   [Symbol.iterator]: () => {
//     let nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
//     let index = 0;
//     return {
//       next: function () {
//         return {
//           value: nums[index++]*2,
//           done: index === nums.length + 1 ? true : false,
//         };
//       },
//     };
//   },
// };

// const multiple = {
//   [Symbol.iterator]: () => {
//     return {
//       nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
//       index: 0,
//       next: function () {
//         return {
//           value: this.nums[this.index++]*2,
//           done: this.index === this.nums.length + 1 ? true : false,
//         };
//       },
//     };
//   },
// };

const multiple = {
  [Symbol.iterator]: () => {
    const max = 10;
    let num = 0;
    return {
      next: function () {
        return {
          value: num++ * 2,
          done: num > max,
        };
      },
    };
  },
};

for (const num of multiple) {
  console.log(num);
}

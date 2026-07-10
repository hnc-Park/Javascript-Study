// #1.
let ChangeStrawberry = (arr) => {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 'strawberry') {
      res.push('kiwi');
    } else {
      res.push(arr[i]);
    }
  }
  return res;
};

function replace(array, from, to) {
  const replaced = Array.from(array);
  for (let i = 0; i < replaced.length; i++) {
    if (replaced[i] === from) {
      replaced[i] = to;
    }
  }
  return replaced;
}

let array = ['banana', 'strawberry', 'grape', 'strawberry'];
console.log(array);
//const res = ChangeStrawberry(array);
const res = replace(array, 'strawberry', 'kiwi');
console.log(res);
console.log(array);

// #2.
let CountElement = (arr, ele) => {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === ele) {
      count++;
    }
  }
  return count;
};

let array2 = ['banana', 'kiwi', 'grape', 'kiwi'];

console.log(CountElement(array2, 'kiwi'));

// #3.
let Sieve = (arr1, arr2) => {
  let arr3 = [];
  for (let i = 0; i < arr1.length; i++) {
    if (arr2.includes(arr1[i])) {
      if (!arr3.includes[arr1[i]]) {
        arr3.push(arr1[i]);
      }
    }
  }

  return arr3;
};

let array3 = ['banana', 'kiwi', 'grape'];
let array4 = ['banana', 'strawberry', 'grape', 'strawberry'];

console.log(Sieve(array3, array4));

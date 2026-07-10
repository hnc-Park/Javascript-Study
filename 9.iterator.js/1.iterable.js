const array = [1, 2, 3];
for (const item of array) {
  console.log(item);
}

for (const item of array.values()) {
  console.log(item);
}

for (const item of array.entries()) {
  console.log(item);
}

for (const item of array.keys()) {
  console.log(item);
}

const obj = { 0: 1, 1: 2 };

for (const item in obj) {
  // key 를 출력
  console.log(item);
}

console.clear();

const iterator = array.values();

// for (const item of iterator) {
//   console.log(item);
// }

while (true) {
  const item = iterator.next();
  if (item.done === true) {
    console.log(item.done);
    console.log(item.value);
    break;
  }
  console.log(item);
  console.log(item.value);
}

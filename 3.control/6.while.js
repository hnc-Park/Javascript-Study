let num = 5;

while (num >= 0) {
  console.log(num);
  num--;
}

let isActive = false;
let i = 0;

while (isActive) {
  console.log('alive');
  if (i == 1000) {
    break;
  }
  i++;
}

do {
  console.log('do while alive');
} while (isActive);

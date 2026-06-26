// 조건문
// if(조건) {}
// if(조건) {} else {}
// if(조건1) {} else if(조건2) {} else {}

let fruit = ' ';

if (fruit === 'apple') {
  console.log('apple');
} else if (fruit === 'orange') {
  console.log('orange');
} else {
  console.log('nothing');
}

if (0) {
  console.log('no!');
}
if ('') {
  console.log('no!');
}
if (null) {
  console.log('no!');
}
if (undefined) {
  console.log('no!');
} else {
  console.log('yes!');
}

if (1) {
  console.log('yes!');
}
if (-1) {
  console.log('yes!');
}
if (' ') {
  console.log('yes!');
}
if ({}) {
  console.log('yes!');
}
if (2 > 1) {
  console.log('yes!');
}

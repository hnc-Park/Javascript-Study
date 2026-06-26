let num = 1;

if (num % 2 === 0) {
  console.log('up');
} else {
  console.log('down');
}

num % 2 === 0 ? console.log('up') : console.log('down');

let emoji = num % 2 === 0 ? 'up' : 'down';

console.log(emoji);

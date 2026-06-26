for (let i = 0; i < 5; i++) {
  console.log(i);
}

for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 5; j++) {
    console.log(i, j);
  }
}

for (let i = 0; i < 20; i++) {
  if (i == 10) {
    continue; // skip
    console.log('i==10');
    break; // exit
  }
  console.log(i);
}

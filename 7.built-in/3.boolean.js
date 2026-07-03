const isTrue = new Boolean(true); // boolean wrapper 객체
console.log(isTrue.valueOf());

const isFalse = false; // boolean primitive value
console.log(isFalse.valueOf());

// Falshy
// 0
// -0
// null
// undefined
// NaN
// ''

// Truthy
// 1
// -1
// '0'
// 'false'
// []
// {}

console.log(globalThis);
console.log(this);

// 전역 속성
console.log(Infinity);
console.log(NaN);
console.log(undefined);

// 전역 함수
eval('const num=2; console.log(num);');
console.log(isFinite(1));
console.log(isFinite(Infinity));

console.log(parseFloat('12.43'));
console.log(parseInt('12.43'));
console.log(parseInt('11'));

// URL (URI, Uniform Resource Identifier 의 하위 개념)
// 아스키 문자로만 구성되어야 하고, 이외 한글이나 특수문자 등은 이스케이프 처리 해야함

const URL = 'https://드림코딩.com';

// 한글이 포함된 URL 을 이스케이프 처리
const encoded = encodeURI(URL);
console.log(encoded);

const decoded = decodeURI(encoded);
console.log(decoded);

// 전체 URL이 아닌 일부는 Component 로 이스케이프 처리
const part = '드림코딩.com';
console.log(encodeURIComponent(part));

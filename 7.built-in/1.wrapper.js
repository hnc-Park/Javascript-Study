// Wrapper Object
// 원시값을 필요에 따라서 관련된 빌트인 객체로 변환한다.
// number -> Number , string -> String

const number = 123; // number 원시 타입
console.log(number.toString()); // number 원시 타입을 감싼 Number 래퍼 객체 ( 를 문자열로 변환 )
console.log(number); // number 원시 타입

const text = 'text'; // string 문자열 원시 타입
console.log(text); // string 문자열 원시 타입
console.log(text.length); // String 래퍼 객체
text.trim(); // String 래퍼 객체

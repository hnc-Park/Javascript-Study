// Error 는 최초 호출 지점까지 Bubbling / Propagation 된다.

function a() {
  throw new Error('error!');
}

function b() {
  try {
    a();
  } catch (error) {
    console.log('여기서 이 에러를 처리하지는 않을게');
    throw error;
  }
}

function c() {
  b();
}

try {
  c();
} catch (error) {
  console.log('Catched!');
}

console.log('done!');

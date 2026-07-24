function runInDelay(callback, seconds) {
  if (!seconds || seconds < 0) {
    throw new Error('0이상의 시간 입력');
  }
  // callback 함수가 없다면
  if (!callback) {
    throw new Error('callback 함수를 전달해야함');
  }

  seconds *= 1000;

  setTimeout(callback, seconds);
}

try {
  runInDelay(() => {
    console.log('타이머 완료!');
  }, -1);
} catch (error) {}

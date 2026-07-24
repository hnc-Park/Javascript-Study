// try catch finally

function readFile(path) {
  throw new Error('파일 경로를 찾을 수 없음');
  return '파일 내용';
}

function processFile(path) {
  let content;
  try {
    // 에러가 throw 될 수 있는 Point 에 try catch 문 작성
    content = readFile(path);
  } catch (error) {
    console.log(error);
    // error.name , error.message , error.stack
    content = '에러 내용';
  } finally {
    console.log('에러가 throw 되든 안돼든 반드시 실행');
  }

  const result = 'hi ' + content;
  return result;
}

const result = processFile('경로');
console.log(result);

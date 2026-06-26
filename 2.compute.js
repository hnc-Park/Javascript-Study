const obj = {
  name: '엘리',
  age: 20,
};

// 컴파일 타임에 확정된 속성 접근 시 dot notation 사용
obj.name;
obj.age;

// 동적으로 속성 접근 시, braket notation 사용
function getValue(obj, key) {
  return obj[key];
}

console.log(getValue(obj, 'name'));

function addProp(obj, key, value) {
  obj[key] = value;
}

addProp(obj, 'job', 'engineer');
console.log(obj);

function deleteKey(obj, key) {
  delete obj[key];
}

deleteKey(obj, 'job');
console.log(obj);

function makeIterable(initValue, maxValue, callback) {
  return {
    [Symbol.iterator]: () => {
      let num = initValue;
      return {
        next: function () {
          return {
            value: callback(num++),
            done: num > maxValue,
          };
        },
      };
    },
  };
}

const multiple = makeIterable(0, 10, (n) => n * 2);

for (const num of multiple) {
  console.log(num);
}

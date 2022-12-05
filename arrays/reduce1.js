// làm phẳng mảng bằng reduce

const delthArray = [1, 2, [3, 4], 5, 6, [7, 8, 9]];
let flatArray = delthArray.reduce((flatOutPut, depthItem) => {
  return flatOutPut.concat(depthItem);
}, []);
// console.log("🚀 ~ file: reduce1.js:5 ~ flatArray ~ flatArray", flatArray);

// làm phẳng mảng bằng flat()

const flat = delthArray.flat();
console.log("🚀 ~ file: reduce1.js:12 ~ flat", flat);

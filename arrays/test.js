// Expected results:
var arr = [
  ["name", "Sơn Đặng"],
  ["age", 18],
];

function arrToObj(arr) {
  const arr1 = arr.reduce((total, item) => {
    return total.concat(item);
  }, []);
  const obj = {};
  obj.name = arr1[1];
  obj.age = arr1[3];
  return obj;
}

console.log(arrToObj(arr)); // { name: 'Sơn Đặng', age: 18 }

let courses = [
  {
    id: 1,
    name: "js",
    coin: 100,
  },
  {
    id: 2,
    name: "html",
    coin: 0,
  },
  {
    id: 3,
    name: "ruby",
    coin: 400,
  },
  {
    id: 4,
    name: "nuxtjs",
    coin: 200,
  },
  {
    id: 5,
    name: "reactjs",
    coin: 100,
  },
];
var i = 0;

function coinHandler(accumulator, currentValue, currentIndex, orginArray) {
  i++;
  console.table({
    "lượt chạy : ": i,
    "biến tích trữ :": accumulator,
    "giá khoá học : ": currentValue.coin,
    "tích trữ được : ": accumulator + currentValue.coin,
  });
  return accumulator + currentValue.coin;
}
let totalCourse = courses.reduce(coinHandler, 0); //gia tri khoi tao

// es6
let totalCoin = courses.reduce((a, b) => a + b.coin, 0);
console.log(totalCoin);

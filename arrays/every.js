//tất cả cấc phần tử đều phải toả mãn 1 đk

let courses = [
  {
    id: 1,
    name: "js",
    coin: 100,
  },
  {
    id: 2,
    name: "html",
    coin: 250,
  },
  {
    id: 3,
    name: "ruby",
    coin: 400,
  },
  {
    id: 4,
    name: "nuxtjs",
    coin: 600,
  },
  {
    id: 5,
    name: "reactjs",
    coin: 500,
  },
];
const result = courses.every((item) => {
  return item.coin > 0;
});
console.log("🚀 ~ file: every.js:31 ~ result ~ result", result);

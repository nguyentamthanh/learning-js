// tìm kiếm trả ra 1 giá trị xác định tìm thấy vòng lặp kết thúc luôn sd tìm kiếm

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
    coin: 600,
  },
  {
    id: 5,
    name: "reactjs",
    coin: 500,
  },
];
let result = courses.find((item) => {
  return item.coin > 100;
});
console.log("🚀 ~ file: find.js:31 ~ result ~ result", result);

//lọc tìm kiếm ra nhiều đối tượng trả ra 1 list

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
const result = courses.filter((item) => item.coin > 200);

console.log(result);

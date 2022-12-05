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
let courses1 = courses.map((item) => {
  return {
    id: item.id,
    name: item.name,
    gia: item.coin,
    active: true,
  };
});
console.table(courses1);

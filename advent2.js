const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const fs = require("fs");
app.listen(port, () => console.log(`Server running on port ${port} 🔥`));
/*
const arr = [1721, 979, 366, 299, 675, 1456];
arr.map((e) => {
  let res = (2020 - e) * e;
  console.log(res);
});*/

fs.readFile("input.txt", "utf-8", function (err, data) {
  if (err) throw err;
  const dados = ([] = data.split("\n"));
  dados.pop();
  resultado = [] = dados.map((e) => {
    let res = (2020 - e) * e;
    console.log(res);
  });
});

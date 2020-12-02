const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const request = require("request");
app.listen(port, () => console.log(`Server running on port ${port} 🔥`));
const hostname = "https://adventofcode.com/2020/day";
const path = "/1";

const arr = [1721, 979, 366, 299, 675, 1456];

arr.map((e) => {
  let res = (2020 - e) * e;
  console.log(res);
});
/*
request(`${hostname}${path}`, (err, res, body) => {
  console.log(body);
});*/
request(
  "https://adventofcode.com/2020/day/1/input",
  function (error, response, body) {
    console.log("error:", error); // Print the error if one occurred
    console.log("statusCode:", response && response.statusCode); // Print the response status code if a response was received
    console.log("body:", body); // Print the HTML for the Google homepage.
  }
);

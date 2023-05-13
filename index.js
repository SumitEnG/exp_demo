const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("hello world");
});

app.get("/app", (req, res) => {
  res.send([1, 2, 3]);
});

app.get("/app/courses/:ID", (req, res) => {
  res.send(req.params);
});

//env variable
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`listening on ${port}`);
});

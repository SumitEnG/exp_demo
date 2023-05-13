const express = require("express");
const app = express();

const courses = [
  {
    id: 1,
    name: "aii",
  },
  { id: 2, name: "aii3" },
  { id: 3, name: "aii34" },
  { id: 4, name: "aii566" },
];

app.get("/app/courses", (req, res) => {
  res.send(courses);
});

app.get("/app/courses/:id", (req, res) => {
  let course = courses.find((c) => {
    return c.id === parseInt(req.params.id);
  });
  if (!course) {
    res.status(404).send("404 not found");
  }
  res.send({ course });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`listening on ${port}`);
});

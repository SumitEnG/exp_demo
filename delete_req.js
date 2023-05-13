const express = require("express");
const app = express();
const Joi = require("joi");
app.use(express.json());

const courses = [
  {
    id: 1,
    name: "aii",
  },
  { id: 2, name: "aii3" },
  { id: 3, name: "aii34" },
  { id: 4, name: "aii566" },
];

app.delete("/app/courses/:id", (req, res) => {
  const course = courses.find((c) => {
    return c.id === parseInt(req.params.id);
  });
  if (!course) {
    res.send("404 not found");
    return;
  }

  const index = courses.indexOf(course);
  const deletedCourse = courses.splice(index, 1);
  res.send(deletedCourse);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

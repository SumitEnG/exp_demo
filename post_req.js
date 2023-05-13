const express = require("express");
const app = express();
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

app.post("/app/courses", (req, res) => {
  const course = { id: courses.length + 1, name: req.body.name };
  courses.push(course);
  res.send(course);
});

const port = process.env.Port || 3000;
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

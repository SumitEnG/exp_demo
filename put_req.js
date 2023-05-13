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

app.put("/app/courses/:id", (req, res) => {
  //check course is present or not
  const course = courses.find((c) => {
    return c.id === parseInt(req.params.id);
  });
  if (!course) {
    res.status(404).send("404 not found");
    return;
  }

  //check validation
  const schema = Joi.object({
    name: Joi.string().min(4).required(),
  });
  const result = schema.validate(req.body);
  if (result.error) {
    res.status(400).send(result.error.details[0].message);
    return;
  }

  course.name = req.body.name;
  res.send(course);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

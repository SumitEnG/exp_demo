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

app.post("/app/courses", (req, res) => {
  const schema = Joi.object({
    name: Joi.string().min(4).required(),
  });
  const result = schema.validate(req.body);
  console.log(result);

  if (result.error) {
    console.log(result.error);
    res.status(404).send(result.error.details[0].message);
    return;
  }

  const course = { id: courses.length + 1, name: req.body.name };
  courses.push(course);
  res.send(course);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on port ${port}`));

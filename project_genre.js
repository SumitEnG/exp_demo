const express = require("express");
const app = express();
const Joi = require("joi");
app.use(express.json());

const genres = [
  { id: 1, genre: "action" },
  { id: 2, genre: "romantic" },
  { id: 3, genre: "sci-fi" },
];

app.get("/vidly/genres", (req, res) => {
  res.send(genres);
});

app.post("/vidly/genres", (req, res) => {
  const schema = Joi.object({ genre: Joi.string().min(4).required() });
  const result = schema.validate(req.body);

  if (result.error) {
    res.status(400).send(result.error.details[0].message);
    return;
  }

  const genre = { id: genres.length + 1, genre: req.body.genre };
  genres.push(genre);
  res.send(genre);
});

app.put("/vidly/genres/:id", (req, res) => {
  const specific_genre = genres.find((g) => {
    return g.id === parseInt(req.params.id);
  });

  if (!specific_genre) {
    res.status(404).send("404 not found");
    return;
  }

  const schema = Joi.object({
    genre: Joi.string().min(4).required(),
  });

  const result = schema.validate(req.body);
  if (result.error) {
    res.status(400).send(result.error.details[0].message);
    return;
  }

  specific_genre.genre = req.body.genre;
  res.send(specific_genre);
});

app.delete("/vidly/genres/:id", (req, res) => {
  const specific_genre = genres.find((g) => {
    return g.id === parseInt(req.params.id);
  });

  if (!specific_genre) {
    res.status(404).send("404 not found");
    return;
  }

  const index = genres.indexOf(specific_genre);
  const deletedGenre = genres.splice(index, 1);
  res.send(deletedGenre);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`listening on ${port}`);
});

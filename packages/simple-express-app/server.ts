import express from 'express';
const app = express();
const cors = require('cors')
const port = 3001;

app.use(cors())

app.get("/", (req, res) => {
  res.json({ foo: "bar" });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
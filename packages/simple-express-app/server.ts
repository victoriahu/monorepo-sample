import { QueryPayload } from 'simple-shared-data';
import express from 'express';
import _ from 'lodash';
const app = express();
const cors = require('cors')
const port = 3001;

app.use(cors())

app.get("/", (_req, res) => {
    const responseData: QueryPayload = {
      payload: _.snakeCase("Server data returned successfully"),
    };
  
    res.json(responseData);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
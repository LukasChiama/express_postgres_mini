const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes')

const app = express();

const router = express.Router();

routes(router);

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.get('/', (req, res) => {
  res.json('Welcome to the Node Postgres app.')
});

app.use('/api', router)

app.listen(3500, () => {
  console.log('We make magic on localhost:3500')
});
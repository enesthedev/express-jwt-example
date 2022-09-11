const express = require('express');
const dotenv = require('dotenv');

dotenv.config(); // load the environment files

// eslint-disable-next-line new-cap
const router = express.Router();

router.use((req, res, next) => { // only allowed to xhr requests
  if (req.xhr) {
    return res.status(405)
        .json({status: 405, message: 'XHR Not found'});
  }
  next();
});

router.get('/', (req, res) => {
  res.json({message: 'test'});
});

const app = express();
const port = 3000;

app.use('/', router);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

const express = require('express');
const jose = require('jose');
const dotenv = require('dotenv');

const {createSecretKey} = require('crypto');

dotenv.config(); // load the environment files

const secretKey = createSecretKey(process.env.JWT_SECRET, 'utf-8');

// eslint-disable-next-line new-cap
const router = express.Router();

router.use((req, res, next) => { // only allowed to xhr requests
  if (req.xhr) {
    return res.status(405)
        .json({status: 405, message: 'XHR Not found'});
  }
  next();
});

router.post('/token', async (req, res) => {
  const jwt = await new jose.SignJWT({})
      .setProtectedHeader({alg: 'HS256'})
      .setIssuedAt()
      .setIssuer()
      .setAudience('urn:example:audience')
      .setExpirationTime('2h')
      .sign(secretKey);
  return res.json({status: 200, message: '', token: jwt});
});

const app = express();
const port = 3000;

app.use('/', router);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

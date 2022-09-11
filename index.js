const express = require('express');
const jose = require('jose');
const dotenv = require('dotenv');
const multer = require('multer');

const {createSecretKey} = require('crypto');

dotenv.config(); // load the environment files

const upload = multer();

// eslint-disable-next-line new-cap
const router = express.Router();

router.use((req, res, next) => { // only allowed to xhr requests
  if (req.xhr) {
    return res.status(405)
        .json({status: 405, message: 'XHR Not found'});
  }
  next();
});

router.use(upload.none()); // form-part middleware without image upload support
router.use(express.json()); // JSON request middleware

// secreyKey for JWT token
const secretKey = createSecretKey(process.env.JWT_SECRET, 'utf-8');

router.post('/token', async (req, res) => { // create's new JWT
  const {body} = req;
  if (!body.issuer || !body.audience) { // form-part validation
    return res.status(422)
        .json({status: 422, message: 'Validation error'});
  }
  const jwt = await new jose.SignJWT(JSON.parse(body.data))
      .setProtectedHeader({alg: 'HS256'})
      .setIssuedAt()
      .setIssuer(body.issuer)
      .setAudience(body.audience)
      .setExpirationTime('2h')
      .sign(secretKey);
  return res.json({status: 200, message: '', token: jwt});
});

router.post('/verify', async (req, res) => { // verify's the JWT token
  const {body} = req;
  if (!body.issuer || !body.audience) { // form-part validation
    return res.status(422)
        .json({status: 422, message: 'Validation error'});
  }
  const token = req.header('Authorization').replace('Bearer ', ''); // get token
  try {
    const {payload, protectedHeader} = await jose.jwtVerify(token, secretKey,
        { // set token issuer and audience
          issuer: body.issuer,
          audience: body.audience,
        }); // explode the token
    console.log(payload); // see token data
    console.log(protectedHeader); // see token algorithm
  } catch (e) {
    console.error(e); // log the error
    return res.status(422).json({status: 422, message: 'Token is invalid'});
  }
});

const app = express();
const port = 3000;

app.use('/', router);

app.listen(port, () => {
  console.log(`JWT example app listening on port ${port}`);
});

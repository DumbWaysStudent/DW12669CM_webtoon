const express = require('express');
const bodyParser = require('body-parser');
require('express-group-routes');

const app = express();
const port = 5000;

//controllers
const TodoController = require('./controller/webtoons');
const AuthController = require('./controller/auth');

//middleware
const {authenticated} = require('./middleware');

app.use(bodyParser.json());

app.group('/api/v1', router => {
  //hellor world
  router.get('/', (req, res) => {
    res.send('Hello World!');
  });
  //auth API
  router.post('/login', AuthController.signIn);
  router.post('/register', AuthController.signUp);
  //
  router.get('/webtoons/', TodoController.showAllToon);
  router.get('/user/', TodoController.showAllUser);
});

app.listen(port, () => console.log(`Listening on port ${port}!`));

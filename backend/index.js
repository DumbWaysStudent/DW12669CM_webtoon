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
  //
  //
  //auth API
  router.post('/login', AuthController.signIn);
  router.post('/register', AuthController.signUp);
  //
  //
  //webtoons
  router.get('/webtoons/', TodoController.showAllToon);
  router.get('/webtoon', TodoController.findToonTitle);
  router.get('/webtoonfav/:id', TodoController.showFavourite);
  router.get('/webtoon/:id/episodes', TodoController.showEpisode);
  router.get('/webtoon/:idWt/episode/:idEp', TodoController.showEpImage);
  //
  //
  //Favourite
  router.get('/favourite', authenticated, TodoController.showFavourite);
  //
  //
  //users
  router.get('/user/', TodoController.showAllUser);
  //
  //Users Webtoon Creation Menu
  router.get('/user/:id/webtoons', authenticated, TodoController.myWebtoon);
  //
  //Users Add New Webtoon Menu
  //Showing the content
  router.get(
    '/user/:idUs/webtoon/:idWt/episodes',
    authenticated,
    TodoController.showCreateWebtoon,
  );
  //Adding New Content
  router.post('/user/:id/webtoon', authenticated, TodoController.createWebtoon);
  //
  //Users Update Webtoon Detail Menu
  //Showing the content is using the showing content before this
  router.patch(
    '/user/:idUs/webtoon/:idWt',
    authenticated,
    TodoController.updateWebtoon,
  );
  //Users Delete his own Webtoon
  router.delete(
    '/user/:idUs/webtoon/:idWt',
    authenticated,
    TodoController.deleteWebtoon,
  );
  //
  //Users Create/Edit New Episode Menu
  //Showing The Content
  router.get(
    '/user/:idUs/webtoon/:idWt/episode/:idEp/images',
    authenticated,
    TodoController.showEditEp,
  );
  //Create New Episode
  router.post(
    '/user/:idUs/webtoon/:idWt/episode',
    authenticated,
    TodoController.createEp,
  );
  //Update Episode
  router.patch(
    '/user/:idUs/webtoon/:idWt/episode/:idEp',
    authenticated,
    TodoController.updateEpisode,
  );
  //Delete Episode
  router.delete(
    '/user/:idUs/webtoon/:idWt/episode/:idEp',
    authenticated,
    TodoController.deleteEps,
  );
  //
  //Adding and Editing Image Episode
  //Adding new Image
  router.post(
    '/user/:idUs/webtoon/:idWt/episode/:idEp/image',
    authenticated,
    TodoController.createImg,
  );
  //Delete Image
  router.delete(
    '/user/:idUs/webtoon/:idWt/episode/:idEp/image/:idIm',
    authenticated,
    TodoController.deleteImg,
  );
});

app.listen(port, () => console.log(`Listening on port ${port}!`));

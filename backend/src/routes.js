const express = require('express');

const routes = express.Router();

const tweetController = require('./controller/TweetController');
const likeController = require('./controller/LikeController');

routes.get("/tweets", tweetController.index);
routes.post("/tweets", tweetController.store);

routes.post("/likes/:id", likeController.store);

module.exports = routes;
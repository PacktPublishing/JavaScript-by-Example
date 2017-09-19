module.exports = {
  posts,
  author,
};

const db = require('../helpers/db').db;
const _ = require('lodash');

function posts(req, res) {
    const posts = db.get('posts').value();

    setTimeout(() => {
      res.status(200).json(posts);
    }, 3000);
}

function author(req, res) {
    const author = decodeURI(req.swagger.params.name.value);
    const allPosts = db.get('posts').value();
    const posts = _.filter(allPosts, {author});

    setTimeout(() => {
      if(posts.length) {
          res.status(200).json(posts);
      } else {
          res.status(400).json({message: 'No Posts found!'});
      }
    }, 3000);
}

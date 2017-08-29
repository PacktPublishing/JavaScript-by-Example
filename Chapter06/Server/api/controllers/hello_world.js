module.exports = {
  authors,
};

const db = require('../helpers/db').db;
const _ = require('lodash');

function authors(req, res) {
    const posts = db.get('posts').value();

    const authors = _.uniq(_.map(posts, 'author'));

    setTimeout(() => {
      res.status(200).json(authors);
    }, 3000);
}

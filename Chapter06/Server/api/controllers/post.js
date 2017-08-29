module.exports = {
  addComment,
};

const db = require('../helpers/db').db;
const _ = require('lodash');

function addComment(req, res) {

    const allPosts = db.get('posts').value();

    const requiredPost = db.get('posts')
        .find({id: req.body.postId})
        .value();

    if(!requiredPost) {
        res.status(400).json({message: 'Not a valid post!'});
        return;
    }

    requiredPost.comments = [{
        id: req.body.id,
        name: req.body.name,
        comment: req.body.comment,
    }, ...requiredPost.comments];

    const newPosts = allPosts.map(post => {
        if(post.id === requiredPost.id) return requiredPost;
        return post;
    });

    setTimeout(() => {
      db
      .set('posts', newPosts)
      .write()
      .then(res.status(200).json({message: 'Comment added successfully'}))
      .catch(res.status(500).json({message: 'Unable to add comment'}));
    }, 3000);

}

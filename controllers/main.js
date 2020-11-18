const Post = require('../models/posts')

exports.hello = (req, res) => {
    res.json({
        "main": [ Post.findById(req.params)
        .populate('location')
        .exec(function (err, list_posts) {
          if (err) { return next(err); }
          //Successful, so render
          res.render('hello', { title: 'Post List', hello: list_posts });
        })
        ]
    })
}
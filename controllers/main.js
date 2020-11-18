const Post = require('../models/posts')

exports.hello = (req, res) => {
    res.json({
        "main": [ Post.find({}, 'location')
        .populate('location')
        .exec(function (err, list_posts) {
          if (err) { return next(err); }
          //Successful, so render
          res.render('hello', { title: 'Book List', hello: list_posts });
        })
        ]
    })
}
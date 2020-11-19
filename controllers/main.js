const Post = require('../models/posts')

exports.hello = (req, res) => {
    res.json({
        "main": [ Post.findById(req.params.id)
        .populate('location')
        .exec(function (err, list_posts) {
          if (err) { console.log(err); }
          //Successful, so render
          res.render('hello', { title: 'Post List', hello: list_posts });
        })
        ]
    })
}
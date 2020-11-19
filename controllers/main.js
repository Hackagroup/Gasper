const Post = require('../models/posts')
const Mongoose = require("mongoose")

exports.hello = (req, res) => {
    res.json({
<<<<<<< HEAD
        "main": [ Post.findById(req.params.id)
        .populate('location')
        .exec(function (err, list_posts) {
          if (err) { console.log(err); }
          //Successful, so render
          res.render('hello', { title: 'Post List', hello: list_posts });
        })
=======
        "main": [ 
            Post.findById(req.params)
            .populate('title')
            .exec(function (err, list_posts) {
                if (err) { return err }
                //Successful, so render
                res.render('hello', { title: 'Post List', hello: list_posts });
                })
>>>>>>> a0f52264a38d51640bb516f2cbae0d62cf417a5c
        ]
    })
}
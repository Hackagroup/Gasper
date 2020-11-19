const Post = require('../models/posts')
const Mongoose = require("mongoose")

exports.hello = (req, res) => {
    Post.findById(req.params.id)
        .populate('title')
        .exec(function (err, list_posts) {
            if (err) { return err }
            //Successful, so render
            res.render('hello', { title: 'Post List', hello: list_posts });
            })
}
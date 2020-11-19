const Post = require('../models/posts')
const Mongoose = require("mongoose")

exports.post = (req,res) => {
    Post.findById(req.params.id)
            .exec(callback)
}
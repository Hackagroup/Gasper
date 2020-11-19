const Post = require('../models/posts')
const Mongoose = require("mongoose")

exports.search = (req,res) => {
    Post.findById(req.params.id)
        .populate('title')
        .populate('content')
        .exec(callback)
}
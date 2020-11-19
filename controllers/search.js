const Post = require('../models/posts')
const Mongoose = require("mongoose")

exports.search = (req,res) => {
    res.json({
        "main":[
            Post.findById(req.params.id)
              .populate('title')
              .populate('content')
              .exec(callback)
        ]
    })
}
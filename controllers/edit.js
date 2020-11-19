const Post = require('../models/posts')
const Mongoose = require("mongoose")

exports.edit = (req, res) => {
    async.parallel({
        Post: function(callback){
            Post.findByIdAndUpdate(req.params.id)
              .populate('title')
              .populate('content')
              .exec(callback)
        }      
    })          
}
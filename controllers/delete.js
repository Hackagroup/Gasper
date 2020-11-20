
// Author : Vitoria

const Post = require('../models/posts')
const Mongoose = require("mongoose");

exports.delete = (req,res) => {
    Post.findByIdAndDelete(req.params.id)
     .populate('content')
     .populate('title')
     .exec(function (err, list_delete){
        if(err) {return err}
     })
}

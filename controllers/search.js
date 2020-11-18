const Post = require('../models/posts')

exports.search = (req,res) => {
    res.json({
        "main":[
            Post.findById(req.params.id)
              .populate('location')
              .populate('content')
              .exec(callback)
        ]
    })
}
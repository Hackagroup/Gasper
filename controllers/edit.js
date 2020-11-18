const Post = require('../models/posts')

exports.edit = (req, res) => {
    res.json({
        "main": [
            Post.findByIdAndUpdate(req.params.id)
              .populate('location')
              .populate('content')
              .exec(callback)
        ]
    })
}
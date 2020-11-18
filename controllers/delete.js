const Post = require('../models/posts')

exports.delete = (req,res) => {
    res.json({
        "main":[
                Post.findByIdAndRemove(req.params.id).populate('content').populate('content').exec(callback)
            ]
    })
}
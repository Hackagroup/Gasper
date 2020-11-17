exports.search = (req,res) => {
    res.json({
        "main":[
            Post.findById(req.params.id)
              .populate('location')
              .exec(callback)
        ]
    })
}
exports.edit = (req, res) => {
    res.json({
        "main": [
            Post.findByIdAndUpdate(req.params.id)
              .populate('location')
              .exec(callback)
        ]
    })
}
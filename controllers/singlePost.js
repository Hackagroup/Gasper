exports.post = (req,res) => {
    res.json({
        "main":[Post.findById(req.params.id)
            .exec(callback)
        ]
    })
}
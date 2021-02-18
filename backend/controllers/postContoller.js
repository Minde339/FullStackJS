const Post = require('../models/Post');
//Post
exports.createPost = async (req, res) => {
    try {
        const post = new Post({
        title: req.body.title,
        description: req.body.description
    });
        const savedPost = await post.save();
        res.json(savedPost);
    } catch (error) {
        res.status(404).json({
            status: 'failed',
            message: error
        });
    }
};

//Get all
exports.getAllPosts = async (req, res) => {
    try {
        const posts = await Post.find();
        res.status(200).json({
            status: 'success',
            requestedAt: req.requestTime,
            results: posts.length,
            data: {
                posts
            }
        });
    } catch (error) {
        res.status(404).json({
            status: 'failed',
            message: error
        });
    }
};

// Get by id
exports.getOnePost = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        res.status(200).json({
            status: 'success',
            requestedAt: req.requestTime,
            data: {
                post
            }
        })
    } catch (error) {
        res.status(404).json({
            status: 'failed',
            message: error
        });
    }
    
};

// Update
exports.updatePost = async (req, res) => {
    try {
        const updatedPost = await Post.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });
        res.status(200).json({
            status: 'success',
            data: {
                post: updatedPost
            }
        });
    } catch (error) {
        res.status(404).json({
            status: 'failed',
            message: error
        });
        
    }
};
//Delete
exports.deletePost = async (req, res) => {
    try {
        await Post.findByIdAndDelete(req.params.id)
        res.status(200).json({
            status: 'success'
        });
    } catch (error) {
        res.status(404).json({
            status: 'failed',
            message: error
        });
    }

};


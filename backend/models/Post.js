const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
    description: String,
})

module.exports = mongoose.model('Posts', PostSchema);
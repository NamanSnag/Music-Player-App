const mongoose = require('mongoose');

const songSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    artist: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    duration: {
        type: Number,
        required: true,
    },
    ratings: {
        type: Number,
        required: true,
    },
    song_url: {
        type: String,
        required: true,
    }
});
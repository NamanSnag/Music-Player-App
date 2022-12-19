const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true
    },
    playList: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'playList'
        }
    ],
    queues: [
        {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'queue'
        }
    ],
    favSongs: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'favSongs'
        }
    ],
    favArtists: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'favArtists'
        }
    ]
},{
    timestamps: true
});

const user = mongoose.model('User', userSchema);

module.exports = user;
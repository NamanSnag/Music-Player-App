const mongoose = require('mongoose');

const playListSchema = new mongoose.Schema({
    playList_Title: {
        type: String,
        required: true,
    },
    user_Id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
    },
    song_Id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'song',
    }
});

const PlayList = mongoose.model('playList', playListSchema);

module.exports = PlayList;
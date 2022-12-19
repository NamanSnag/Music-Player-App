const mongoose = require('mongoose');

const favSondSchema = new mongoose.Schema({
    user_Id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
    },
    song_Id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'song',
    }
});

const FavSong = mongoose.model('favSong', favSondSchema);

module.exports = FavSong;
const mongoose = require('mongoose');

const favArtistSchema = new mongoose.Schema({
    user_Id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
    },
    song_Id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'song',
    }
});

const FavArtist = mongoose.model('favArtist', favArtistSchema);

module.exports = FavArtist;
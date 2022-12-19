const mongoose = require('mongoose');

const favArtistSchema = new mongoose.Schema({
    user_Id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
    },
    song_Id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'song',
    },
    // handling toggle button
    favbtnArtist:{
        type: Boolean,
        default: false,
    }
    
});

const FavArtist = mongoose.model('favArtist', favArtistSchema);

module.exports = FavArtist;
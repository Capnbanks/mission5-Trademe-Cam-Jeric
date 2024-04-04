const mongoose = require('mongoose');

const listingSchema = new mongoose.Schema({
    title: String,
    location: String,
    imageUrl: String,
    price: String,
    currentBid: String,
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Listing', listingSchema);
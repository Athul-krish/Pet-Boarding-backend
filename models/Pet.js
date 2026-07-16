const mongoose = require("mongoose");

const PetSchema = new mongoose.Schema({

    bookingId: {
        type: String,
        required: true,
    },

    petName: {
        type: String,
        required: true,
    },

    petType: {
        type: String,
        required: true,
    },

    breed: {
        type: String,
        required: true,
    },

    age: {
        type: Number,
        required: true,
    },

    weight: {
        type: Number,
        required: true,
    },

    vaccinationStatus: {
        type: String,
        required: true,
    },

    ownerName: {
        type: String,
        required: true,
    },

    ownerPhone: {
        type: String,
        required: true,
    },

    ownerEmail: {
        type: String,
        required: true,
    },

    checkInDate: {
        type: String,
        required: true,
    },

    checkOutDate: {
        type: String,
        required: true,
    },

    kennelNumber: {
        type: String,
        required: true,
    }

});

module.exports = mongoose.model("pets", PetSchema);
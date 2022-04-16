const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId
const ticketSchema = new mongoose.Schema({
    trainName: {
        type: String,
        required: true
    },
    trainNumber: {
        type: String,
        required: true
    },
source: {
        type: String,
        required: true
    },
    destination: {
        type: String,
        required: true
    },
    departureTime: {
        type: String,
        required: true
    },
    arrivalTime: {
        type: String,
        required: true
    },
mobileNumber: {
     ref: 'User',
        type: ObjectId,
        required: true
    },
    name: {
        ref: 'User',
        type: ObjectId,
        required: true
    },
    dateOfJourney: {
        type: String,
    },
    class: {
        type: String,
        required: true
    },
    seat: {
        type: Number,
        required: true
    },
    fare: {
        type: Number,
        required: true
    },
    timestamp: {
        type: Date,
        default: Date.now
    }
})
module.exports = mongoose.model('Ticket', ticketSchema)

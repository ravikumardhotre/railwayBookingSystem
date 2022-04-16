const mongoose= require('mongoose');
const trainSchema=new mongoose.Schema({
    trainName: {
        type: String,
        required: true
    },
    trainNumber: {
        type: String,
        required: true
    },
    trainType: {
        type: String,
        required: true
    },
    trainFare: {
        type: Number,
        required: true
    },
    trainSeat: {
        type: Number,
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
  
    dateOfJourney: {
        type: String,
    },
    trainStatus: {
        type: String,
        required: true
    },
    capacity: [
        { class:{
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
        }
    }
    ],
    availableSeat: [
        { class:{
            type: String,
            required: true
        },
        seat: {
            type: Number,
            required: true
        }
    }

    ]
}, {timestamps: true})


module.exports = mongoose.model('Train', trainSchema);
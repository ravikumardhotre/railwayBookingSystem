const trainModel = require('../model/trainModel');

const createTrain = async (req, res) => {
    try {
        const requestBody = req.body;
        const { trainName, trainNumber, trainType, trainFare, trainSeat, source, destination, departureTime, arrivalTime,dateOfJourney, trainStatus,capacity,availableSeat } = requestBody;
        const trainData = {
            trainName,
            trainNumber,
            trainType,
            trainFare,
            trainSeat,
            source,
            destination,
            departureTime,
            arrivalTime,
            dateOfJourney,
            trainStatus,
            capacity,
            availableSeat

        };
        const createTrainData = await trainModel.create(trainData);
        res.status(201).send({
            status: true,
            message: "Train Created Successfully",
            data: createTrainData
        });
    } catch (error) {
        res.status(500).send({
            status: false,
            message: "Internal Server Error"
        });
    }
};






const getAllTrain = async (req, res) => {
    try {
        const getAllTrainData = await trainModel.find();
        res.status(200).send({
            status: true,
            message: "All Train Data",
            data: getAllTrainData
        });
    } catch (error) {
        res.status(500).send({
            status: false,
            message: "Internal Server Error"
        });
    }
}


const getTrainById = async (req, res) => {
    try {
        const { id } = req.params;
        const getTrainByIdData = await trainModel.findById(id);
        res.status(200).send({
            status: true,
            message: "Train Data",
            data: getTrainByIdData
        });
    } catch (error) {
        res.status(500).send({
            status: false,
            message: "Internal Server Error"
        });
    }
}


const updateTrain = async (req, res) => {
    try {
        const { id } = req.params;
        const requestBody = req.body;
        const { trainName, trainNumber, trainType, trainFare, trainSeat, source, destination, departureTime, arrivalTime,dateOfJourney, trainStatus,capacity,availableSeat } = requestBody;
        const updateTrainData = await trainModel.findByIdAndUpdate(id, {
            trainName,
            trainNumber,
            trainType,
            trainFare,
            trainSeat,
            source,
            destination,
            departureTime,
            arrivalTime,
            dateOfJourney,
            trainStatus,
            capacity,
            availableSeat
            
        });
        res.status(200).send({
            status: true,
            message: "Train Updated Successfully",
            data: updateTrainData
        });
    } catch (error) {
        res.status(500).send({
            status: false,
            message: "Internal Server Error"
        });
    }
}


const deleteTrain = async (req, res) => {
    try {
        const { id } = req.params;
        const deleteTrainData = await trainModel.findByIdAndDelete(id);
        res.status(200).send({
            status: true,
            message: "Train Deleted Successfully",
            data: deleteTrainData
        });
    } catch (error) {
        res.status(500).send({
            status: false,
            message: "Internal Server Error"
        });
    }
}


module.exports = { createTrain, getAllTrain, getTrainById, updateTrain, deleteTrain };


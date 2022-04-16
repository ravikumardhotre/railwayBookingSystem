const ticketModel = require('../model/ticketModel');
const userModel = require('../model/userModel');
const adminModel = require('../model/adminModel');
const trainModel = require('../model/trainModel');





const generateTicket = async (req, res) => {
    try {
  
        const check = await trainModel.findOne({trainStatus: "available"}); //check if train is available or not
       if(!check) {
              res.status(400).send({
                status: false,
                message: "No train available"
              })
       }
    

        const requestBody = req.body;
        const { trainName, trainNumber,source,destination,departureTime,arrivalTime,dateOfJourney ,seat ,fare } = requestBody;
        const ticketData = {
            trainName,
            trainNumber,
            source,
            destination,
            departureTime,
            arrivalTime,
            dateOfJourney,
            seat,
            fare,
            name:userModel.name,

        };

        const createTicketData = await ticketModel.create(ticketData);
        res.status(201).send({
            status: true,
            message: "ticket created successfully",createTicketData
        })
    } catch (error) {
        res.status(500).send({
            status: false,
            message: "something went wrong"
        })
    }
}





module.exports = { generateTicket}
const express = require("express");
const router = express.Router();
const userController = require("../controller/userController");
const adminController = require("../controller/adminController");
const trainController = require("../controller/trainController");
const ticketController = require("../controller/ticketController");

router.post("/register", userController.createUser);
router.post("/login", userController.loginUser);

router.post("/enterOtp", userController.enterOtp);
router.post("/logout", userController.loginOutUser);

// // admin
router.post("/admin/register", adminController.createAdmin);
router.post("/admin/login", adminController.loginAdmin);

// // create Trains
router.post("/admin/createTrain",  trainController.createTrain);
router.get("/admin/getAllTrain",trainController.getAllTrain);
router.put("/admin/updateTrain/:trainNumber",  trainController.updateTrain);
router.delete("/admin/deleteTrain/:trainNumber",  trainController.deleteTrain);

// // book tickets
 router.post("/bookTicket",ticketController.generateTicket);



module.exports = router;

// crete admin
// crete Trains
const adminModel = require("../model/adminModel");
const validate = require("../validation/validator");
const jwt = require("jsonwebtoken");

const createAdmin = async (req, res) => {
  try {
    const requestBody = req.body;
    const { name, email, password, confirmPassword } = requestBody;

    const isEmailAlreadyUsed = await adminModel.findOne({ email });

    if (isEmailAlreadyUsed) {
      res.status(400).send({
        status: false,
        message: `${email} email address is already registered`,
      });
      return;
    }

    if (!validate.isValid(password)) {
      res.status(400).send({ status: false, message: `Password is required` });
      return;
    }

    if (!validate.isValid(confirmPassword)) {
      res.status(400).send({
        status: false,
        message: `confirmPassword is required correct`,
      });
      return;
    }

    if (password !== confirmPassword) {
      res.status(400).send({ status: false, message: "password not match" });
      return;
    }
    const secretKey = process.env.SECRET_KEY;
    if (secretKey !== requestBody.secretKey) {
      res.status(400).send({ status: false, message: "secretKey not match" });
      return;
    }

    const encryptedPassword = await bcrypt.hash(password, saltRounds); //encrypting password by using bcrypt.
    const encryptedconfirmPassword = await bcrypt.hash(
      confirmPassword,
      saltRounds
    ); //encrypting password by using bcrypt.

    adminData = {
      name,
      email,
      password: encryptedPassword,
      confirmPassword: encryptedconfirmPassword,

      phone: requestBody.phone,
    };

    const createAdminData = await adminModel.create(adminData);
    res.status(201).send({
      status: true,
      msg: "successfully created",
      data: createAdminData,
    });
  } catch (err) {
    res.status(500).send({ status: false, msg: err.message });
  }
};

const loginAdmin = async (req, res) => {
  try {
    const requestBody = req.body;
    const { email, password, secretKey } = requestBody;
    const isEmailAlreadyUsed = await adminModel.findOne({ email });
    if (!isEmailAlreadyUsed) {
      res.status(400).send({
        status: false,
        message: `${email} email address is not registered`,
      });
      return;
    }
    const isPasswordMatch = await bcrypt.compare(
      password,
      isEmailAlreadyUsed.password
    );
    if (!isPasswordMatch) {
      res.status(400).send({
        status: false,
        message: "password is incorrect",
      });
      return;
    }
    if (secretKey !== process.env.SECRET_KEY) {
      res.status(400).send({
        status: false,
        message: "secretKey is incorrect",
      });
      return;
    }

    const token = jwt.sign(
      {
        email: isEmailAlreadyUsed.email,
      },
      process.env.SECRET_KEY,
      {
        expiresIn: "1h",
      }
    );
    res.status(200).send({
      status: true,
      message: "successfully login",

      data: {
        token,
      },
    });
  } catch (err) {
    res.status(500).send({ status: false, msg: err.message });
  }
};

module.exports = { createAdmin, loginAdmin };

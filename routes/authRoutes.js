const { login, signin } = require("../controllers/authController");

const express = require("express");

const authrouter = express.Router();

authrouter.post('/login',login)
authrouter.post('/signin',signin)

module.exports = authrouter
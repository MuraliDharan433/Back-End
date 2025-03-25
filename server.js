const express = require('express');
const cors = require("cors");
const mongoose = require('mongoose');
const connectDB = require('./config/db.js');
const dotenv = require('dotenv');
const authrouter = require('./routes/authRoutes.js');
const departmentrouter = require('./routes/departmentRoutes.js');
const employeeRouter = require('./routes/employeeRoutes.js');
dotenv.config();
const app = express()
connectDB();

app.use(express.json())
app.use(cors());

console.log(process.env.PORT);



app.use("/api/auth",authrouter)
app.use("/api/departments",departmentrouter)
app.use("/api/employees",employeeRouter)

const PORT = process.env.PORT || 4000
app.listen(PORT, () => console.log(`Example app listening on port ${PORT}`))
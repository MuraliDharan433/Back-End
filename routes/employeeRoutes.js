const express = require('express');
const { getEmployees, createEmployee, updateEmployee, deleteEmploee } = require('../controllers/employeeController');
const authMiddleware = require('../middleware/authMiddleware');

const employeeRouter = express.Router(); 


employeeRouter.get('/',authMiddleware,getEmployees)

employeeRouter.post('/',authMiddleware,createEmployee)

employeeRouter.put('/:id',authMiddleware,updateEmployee)

employeeRouter.delete('/:id',authMiddleware,deleteEmploee)

module.exports = employeeRouter


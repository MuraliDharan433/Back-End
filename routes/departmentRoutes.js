const express = require('express');
const { getDepartments, createDepartment, updateDepartment, deleteDepartment } = require('../controllers/departmentController');
const authMiddleware = require('../middleware/authMiddleware');

const departmentrouter = express.Router();

departmentrouter.get('/',authMiddleware,getDepartments)

departmentrouter.post('/',authMiddleware,createDepartment)

departmentrouter.put('/:id',authMiddleware,updateDepartment)

departmentrouter.delete('/:id',authMiddleware,deleteDepartment)


module.exports = departmentrouter
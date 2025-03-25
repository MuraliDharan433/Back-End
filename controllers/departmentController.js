const Department = require("../models/Department")




exports.getDepartments = async(req,res)=>{
     const departments = await Department.find();

     res.json(departments)
}


exports.createDepartment  = async(req,res)=>{
     const newDepartment = new Department(req.body);

     await newDepartment.save();

     res.json({message:'Department created'})
}



exports.updateDepartment = async(req,res)=>{
     await Department.findByIdAndUpdate(req.params.id,req.body);

     res.json({messgae:"Deparment updated"})
}



exports.deleteDepartment = async(req,res)=>{
     await Department.findByIdAndDelete(req.params.id);

     res.json({messgae:'Department Deleted'})
}
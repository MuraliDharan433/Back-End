const Employee = require("../models/Employee");

exports.getEmployees = async (req, res) => {
  const employees = await Employee.aggregate([
    {
      $lookup: {
        from: "departments", // Collection name of Department
        localField: "departmentId", // Field in Employee collection
        foreignField: "_id", // Field in Department collection
        as: "departmentInfo",
      },
    },{ $unwind:{path: "$departmentInfo",preserveNullAndEmptyArrays: true }},
    {
     $project: {
       name: 1,
       age: 1, // Include other required fields
       isActive:1,
       nationality:1,
       departmentId:1,
       gender:1,
       departmentName: "$departmentInfo.name" // Rename department field
     }
   }
  ]);

  res.json(employees);
};

exports.createEmployee = async (req, res) => {
  const newEmployee = new Employee(req.body);

  await newEmployee.save();

  res.json({ message: "Employee Created" });
};

exports.updateEmployee = async (req, res) => {
  await Employee.findByIdAndUpdate(req.params.id, req.body);

  res.json({ mnessage: "Employee Updated" });
};

exports.deleteEmploee = async (req, res) => {
  await Employee.findByIdAndDelete(req.params.id);

  res.json({ message: "Employee Deleted" });
};

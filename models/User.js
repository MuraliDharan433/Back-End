const mongoose = require('mongoose');


const UserSchema = new mongoose.Schema({
     name:{
          type:String,
          required:true,
          trim:true
     },
     email:{
          type:String,
          required:true,
          unique:true,
          lowercase:true,
          trim:true,
          match:[/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Please enter a valid email address"]
     },
     password:{
          type:String,
          required:true,
          minlength:6
     },
     createdDate:{
          type:Date,
          default:Date.now
     },
     modifiedDate:{
          type:Date,
          default:Date.now
     }
})


module.exports = mongoose.model('User',UserSchema)
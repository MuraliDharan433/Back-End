const User = require("../models/User");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs')



exports.login = async(req,res)=>{
     const {useremail,password} = req.body;

     if (!useremail || !password) {
          return res.status(400).json({ message: "Useremail and password are required" });
        }

     try {
          const user = await User.findOne({email:useremail})
          console.log(useremail);
          
          if(!user) return res.status(400).json({message:'User not found'})

          const isMatch = await bcrypt.compare(password,user.password);
          if(!isMatch) return res.status(400).json({message:'Invalid credentials'})

          const token = jwt.sign({id:user._id}, process.env.JWT_SECRET,{expiresIn:'5y'})

          res.json({token})
     } catch (error) {
          res.status(500).json({messgae:'Server Error'})
          console.log(error);
          
     }
} 


exports.signin = async(req,res)=>{

     const {name,email,password} = req.body

     if(!name || !email || !password ){
          return res.json({message:'All Fields are Required'})
     }

     const existingUser = await User.findOne({email})

     if(existingUser){
          return res.status(400).json({message:'Email is alredy use'})
     }
     
     const salt = await bcrypt.genSalt(10);

     const hashedPassword = await bcrypt.hash(password,salt)


     const newUser = new User({name,email,password:hashedPassword})
     await newUser.save()

     res.json('New User Created')
}
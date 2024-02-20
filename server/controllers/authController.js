const User = require('../models/user')
const {comparepassword, hashpassword} = require('../helpers/auth')

const test = (req,res)=>{
    res.json('test is working')
}


const registerUser = async(req,res) =>{
 try{
     const {name, email, password} = req.body;
     //check if name was entered
     if(!name){
        return res.json({
            error: 'name is required'
        })
     };
     // check is password is good
     if(!password || password.length < 6){
        return res.json({
            error:'password is required and should be at least 6 character long'
        })
     };
     //check email 
     const exist = await User.findOne({email});
     if(exist){
        return res.json({
            error:'email is taken already'
        })
     }

const hashpassword=await hashpassword(password)
 const user = await User.create({
        name,
        email,
        password:hashpassword,
     })
return res.json(user)
 }catch(error){
    console.log(error);
   }
 
}
const loginuser=async(req,res)=>{
    try{
        const {email,password}=req.body;

        //check if user exists
        const user =await User.findOne({email});
        if(!user){
            return res.json({
                error:'no user found'
            })
        }
        //check if password match
        const match =await comparepassword(password,user.password)
if(match){
    res.json('passwords match')
}
    }catch(error)
    {
console.log(error);
    }
}
module.exports = {
    test,
    registerUser,
    loginuser
}
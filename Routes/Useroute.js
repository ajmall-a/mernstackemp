const express = require('express');
const router = express.Router();
const users =require('../Model/user');
const jwt =require('jsonwebtoken');
router.use(express.json());
//post operation
router.post('/',async(req,res)=>{
    try {
        const data = req.body;
        let newUser = await users(data).save();
        console.log(newUser);
        res.status(200).send({message:"Data added"})
    } catch (error) {
        console.log(error);
    }
})

//route for login
router.post('/login',async (req,res)=>{
    let username = req.body.Username;
    let password = req.body.Password;

    const user = await users.findOne({Username:username});
    if(!user){
        res.json({message:"User not Found"})
    }
    try {
        if(user.Password== password){
            let payload={username:username,password:password};
            let token=jwt.sign(payload,'reactempapp');
            res.send({message:"login successfull",token:token})
        }
        else{
            res.json({message:"login failed"})
        }
    } catch (error) {
        console.log(error);
    }
})
module.exports=router;
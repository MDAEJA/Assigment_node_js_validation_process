const express = require("express");

const app = express();

app.use(express.json());

const validate_name = (req,res,next)=>{
    try{
        const employee_data = req.body;
        // console.log(employee_data);
        const first_Char = employee_data.first_name.at(0);
        const last_Char = employee_data.last_name.at(0);
      
        if(first_Char >= 'A' && first_Char <= 'Z' && last_Char >= 'A' && last_Char <= 'Z'){
            console.log("*********"+"  first name and last name validate process is success  "+"*********")
        }
        else{
            console.log("name format  is not correct");
       return  res.status(500).json({
                status : false,
                message : "please provide correct naming format as per requirement"
            })
            
        }
        next()
        // res.json({
        //     status : true
        // })
    }
    catch(err){
        console.log("getting an error   :"  +err);
    }
    
   
}

const validate_password = (req,res,next)=>{
    try{
        const employee_data = req.body;
        const employee_password = employee_data.password;
        if(/[A-Z]/.test(employee_password) && /[a-z]/.test(employee_password) && employee_password.length >= 8 &&  /\d/.test(employee_password)){
            console.log("*********"+" password validate process is success  "+"*********")
        }
        else{
            console.log("password is not correct");
        return  res.status(500).json({
                status : false,
                message : "please provide correct password format as per requirement"
            })
            // return;
        }
        next();
        // res.json({
        //     status : true
        // })
    }
    catch(err){
        console.log("getting an error   :"  +err);
    }
    next();
    
}


const validate_phoneNumber = (req,res,next)=>{
    try{
        const employee_data = req.body;
        const employee_number = employee_data.phone_number.length;
        if(employee_number === 10 ){
            console.log("*********"+" phone number validate process is success   "+"*********")
        }
        else{
            console.log("Phone numberis not correct")
        return    res.status(500).json({
                status : false,
                message : "please provide correct phone number "
            })
        }
        next()
        // res.json({
        //     status : true
        // })
    }
    catch(err){
        console.log("please provide correct number")
    }
    // next();
}

const validate_emailAddress = (req,res,next)=>{
    try{
        const employee_data = req.body;
        const email = employee_data.email;
        if(email.includes("@")){
            console.log("*********"+"   email validate process is success    "+"*********")
        }
        else{
            console.log("email address is not correct")
          return  res.status(500).json({
                status : false,
                message : "please provide correct email address"
            })
        }
        next();
        
        // res.json({
        //     status : true
        // })
        
    }
    catch(err){
        console.log(err);
    }
    
}

const login = (req,res)=>{
    console.log("*********"+"  YOU LOGGED SUCCEESSFULLY   "+"*********")
    res.json({
        status :'SUCCESS',
        Message : "LOGIN SUCCESSFUL"
    })
}




app.use('/validate_data',validate_name,validate_password,validate_phoneNumber,validate_emailAddress,login)






app.listen(8090,()=>{
    console.log("server is connected on port 8090");
})
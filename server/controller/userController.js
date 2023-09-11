import User from '../user-schema.js'




export const  adduser= async (req,res)=>{
     const user=req.body;
     
     const  newUser=new User(user);

     try{
           await   newUser.save();
           res.status(201).json(newUser);
     }catch(error){
      res.status(409).json({message: error.message})
            console.log("error")
     }
}

export const getUsers=async(req,res)=>{
  try{
    const users = await user.find({});
    res.status(200).json(users)
  }catch(error){

  }
}
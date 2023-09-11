import mongoose from "mongoose"

const connection=async(username,password)=>{

  const URL=`mongodb+srv://${username}:${password}@cluster0.0jvrkdi.mongodb.net/?retryWrites=true&w=majority`;
     try{
        await mongoose.connect(URL,{useUnifiedTopology:true , useNewUrlParser:true });
        console.log("database connected.....")
     }catch(error){
      console.log("error while connecting ",error)
     }
}

export default connection;
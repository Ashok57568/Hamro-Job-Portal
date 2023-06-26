import mongoose from "mongoose";

//schema
const userSchema = new mongoose.Schema({
 name:{
    type:String,
    required:[true,'Name Is Require']
 }
})

export default mongoose.model('User',userSchema)
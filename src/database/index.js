import mongoose from "mongoose";


const connectToDB = async()=>{
    try {
        await mongoose.connect("mongodb+srv://netflixclone:netflixclone123@cluster0.q6u4ato.mongodb.net/");
        console.log('Mongo DB Connected');
    } catch (error) {
        console.log(error);
        
    }
}

export default connectToDB;

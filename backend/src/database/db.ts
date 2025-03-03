import mongoose from "mongoose";

interface props {
    username: String;
    password: String;
}

const dbConnection = async({username, password} : props) : Promise<void> => {
    const url = `mongodb+srv://${username}:${password}@cluster0.9mkfa.mongodb.net/`
    try{
        const response = await mongoose.connect(url);
        console.log("Connected to database");
    }catch(error){
        console.log("error connecting in database", error);
    }
}

export default dbConnection
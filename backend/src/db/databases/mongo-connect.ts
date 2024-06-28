import mongoose from "mongoose";


const connectTOMOGODB = () => {

    const DB_URI = process.env.MONGO_URI;

    if(!DB_URI){
        console.error(`DB Envirnoment variable not defined`);
        return;
    }

    mongoose.connect(DB_URI,{})
    .then((conn)=>{
        console.log(`MONGO-DB connected to ${conn.connection.host}`);
    })
    .catch((err)=>{
        console.log(`Error connecting to db ${err}`);
    })
}


export default connectTOMOGODB;
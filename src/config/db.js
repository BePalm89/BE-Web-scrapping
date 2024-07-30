import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DB_URL);
        console.log("Connection to the DB was successfull");
    } catch (error) {
        console.log("Error during connection to the DB");
    }
}
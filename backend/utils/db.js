import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DB_URL);
        console.log("Database connected.")
    }
    catch(error) {
        console.log("Error while connnecting database : " + error);
        process.exit(1);
    }
}
import mongoose from "mongoose";
import config from "../config";

const connectDB = async () => {
    try {
        mongoose.connect(config.mongoURI);
        mongoose.connection.on('connected', () => {
            console.log('MongoDB Connected');
        });
    } catch(err:any) {
        console.error('MongoDB Connection Error:',err);
        process.exit(1);
    }
}

export default connectDB;
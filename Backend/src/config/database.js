import dotenv from 'dotenv';

import mongoose from 'mongoose';
dotenv.config();

export const connectToDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Connected to Database');
    } catch (error) {
        console.log(error)
    }
} 
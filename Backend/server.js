import dotenv from 'dotenv';
import app from "./app.js";
import { connectToDB } from './src/config/database.js';

dotenv.config();

const port = process.env.port || 4000;
connectToDB();

app.listen(port, ()=>{
    console.log(`Server has been started and running on http://localhost:${port}`);
})
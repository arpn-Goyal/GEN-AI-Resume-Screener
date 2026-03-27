import dotenv from 'dotenv';
import app from "./app.js";

dotenv.config();

const port = process.env.port || 4000;

app.listen(port, ()=>{
    console.log(`Server has been started and running on http://localhost:${port}`);
})
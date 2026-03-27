import express, { response } from 'express'

const app = express();
app.use(express.json());

app.get('/', (req, res)=>{
    res.end('Server');
})
export default app;
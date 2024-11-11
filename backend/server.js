import express from 'express';
import cors from 'cors';
import { connectDB } from './config/db.js';



//app config
const app = express();
const port = 3000;


//middleware
app.use(express.json())
app.use(cors())

// DB connection
connectDB();

app.get("/", (req, res) => {
    res.send("API working successfully")
})

app.listen(port, (req, res) => {
    console.log(`server listening on http://localhost:${port}`)
})

//mongodb+srv://shamim:<db_password>@cluster0.jhw0f.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
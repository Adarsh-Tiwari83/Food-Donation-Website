const express=require('express');
const dotenv=require('dotenv');
const colors=require('colors');
const morgan=require('morgan');
const cors=require('cors');
const connectDB = require('./config/db');


//dotenv config
dotenv.config();

//mongodb connect
connectDB();

const app=express();

//middlewares
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

app.use('/api/v1/test',require('./routes/testRoute'));
app.use('/api/v1/auth',require('./routes/authRoutes'));

const PORT=process.env.PORT || 8080;

app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`.bgBlue.white);
})
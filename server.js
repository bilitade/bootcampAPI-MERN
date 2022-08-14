const express=require('express');
const dotenv=require('dotenv');
dotenv.config({path:'./config/config.env'});

const app= express();
app.listen(process.env.PORT||5000, console.log(`Server running ${process.env.NODE_ENV} mode on port ${process.env.PORT}`));
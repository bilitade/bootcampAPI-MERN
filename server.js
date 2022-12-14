const express = require('express');
const dotenv = require('dotenv');

dotenv.config({ path: './config/config.env' });
const bootcamps=require('./routes/bootcamps');

const PORT = process.env.PORT || 5000;
const app = express();



 app.use('/api/v1/bootcamps',bootcamps);


app.listen(PORT, console.log(`Server running ${process.env.NODE_ENV} mode on port ${PORT}`));


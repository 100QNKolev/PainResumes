const express = require('express');
const app = require('express')();
const cookieParser = require('cookie-parser');
const authMiddleware = require('./middlewares/authMiddleware');
const cors = require('cors');
const PORT  = require('./config/config').PORT;

app.use(express.json());
require('./config/database')();
app.use(cookieParser());
require('./config/routes')(app);

app.use(cors(
    //origin: ['http://localhost:3000', 'http://localhost:3030']
  ));
  
app.listen(PORT, console.log(`Server is listening on port ${PORT}...`));
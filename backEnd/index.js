const express = require('express');
const dotenv = require('dotenv').config();
const models = require('./models/model');
const Sequelize = require('./db');
const router = require('./routes/index');
const cors = require('cors');
const fileUpload = require('express-fileupload');
const path = require('path');

const port = process.env.PORT || 5000;
const server = express();

//middleware
server.use(cors());
server.use(express.json());
server.use(express.static(path.resolve(__dirname, 'static')));
server.use(fileUpload({}));
server.use('/api', router);

//start server
const start = async() =>{
    try{
        await Sequelize.authenticate();
        await Sequelize.sync();
        server.listen(port, ()=>console.log(`Server started on ${port} port`));
    }catch(e){
        console.log(e);   
    }
}

start();

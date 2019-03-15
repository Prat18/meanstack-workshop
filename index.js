const express = require('express');
const app = express();
const router = express.Router();
const mongoose = require('mongoose');
const config = require('./config/db');
const path = require('path');
const feedback = require('./routes/feedbackroute')(router);
const bodyparser = require('body-parser');

mongoose.connect(config.uri, (err) => {
    if(err){
        console.log("Could not connect to the database: ", err);
    } else{
        console.log("Connected to database successfully: " + config.db);
    }
})

app.use(bodyparser.urlencoded({extended: false}));

app.use(express.static(__dirname + '/client/dist/client'));
app.use('/feedback', feedback);

app.get('*', (req,res) => {
    res.sendFile(path.join(__dirname + '/client/dist/client/index.html'));
})

app.listen(8080, () => {
    console.log("Listening to port 8080");
})
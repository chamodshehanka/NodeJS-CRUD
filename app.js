const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
const path = require('path');

const db = require('./db');
const collection = 'todo';


db.connect((err) => {
    if(err){
        console.log('Unable to connect!');
        process.exit(1);
    }else{
        app.listen(3000, () => {
            console.log('Connected to database, app listing on port 3000');
        });
    }
});
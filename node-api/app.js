const express = require('express');
const mongoose = require('mongoose');
const app = express();


const postRoutes = require('./routes/api_route');

app.use(express.urlencoded({
    extended: false
}));

app.use(express.json());
    
app.use('/', postRoutes);


app.get('/', (req, res, next) => {
    res.send('running node-api');
});

mongoose

    .connect('mongodb+srv://rajeevpatn:manya@2011@cluster0-o382w.mongodb.net/test?retryWrites=true&w=majority', {
        useNewUrlParser: true
    })
    .then(() => {
        app.listen(3000, console.log('database connected!'));
    })
    .catch(err => console.log(err));
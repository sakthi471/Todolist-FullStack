const express = require('express');
const mongoose = require('mongoose');

// Set strictQuery to false to prepare for the change
mongoose.set('strictQuery', false);

const app = express();

mongoose.connect('mongodb://localhost:27017/todolist').then(() => {
    console.log('database connected');
});

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// routers
app.use(require('./router/index'));
app.use(require('./router/Todo'));

app.set('view engine', 'ejs');

app.listen(5500, () => {
    console.log('server running at port: 5500');
});

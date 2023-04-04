const express=require('express')
const mongoose=require('mongoose');

const app=express();

mongoose.connect('mongodb://127.0.0.1:27017/todolist',).then(()=>{
    console.log('data base connected');
})



app.use(express.urlencoded({extended:true}));
app.use(express.static('public'))

//routers 

app.use(require('./router/index'));
app.use(require('./router/Todo'))

app.set('view engine','ejs')








app.listen(8080,()=>{
    console.log('server running at port: 8080');
}) 
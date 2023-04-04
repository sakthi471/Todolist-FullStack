const mongoose=require('mongoose')

const Todoschema=new mongoose.Schema({
    todo:{
        type:String,
        required:true,
    }
})

const TodoModel= new mongoose.model('Todo',Todoschema);

module.exports=TodoModel;
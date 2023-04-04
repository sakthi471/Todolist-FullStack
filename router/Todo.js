const router = require('express').Router();

const Todo = require('../models/todo')


router.post('/add', (req, res) => {
    const todo = req.body.todo;
    const newTodo = new Todo({ todo: todo })
    newTodo.save().then(() => {
        console.log('successfully added todo');
        res.redirect('/')
    }).catch(err => console.log(err))

}).get('/delete/todo/:_id', (req, res) => {
    const id = req.params;
    Todo.deleteOne({ id })
        .then(() => {
            console.log('deleted success');
            res.redirect('/')
        })
        .catch((err) => {
            console.log(err);
        })
})


router.post('/update/', async (req, res) => {
    const _id = req.query._id;
    const updateDate = req.body.todo;
    
    const doc = await Todo.findByIdAndUpdate(_id, {todo:updateDate})
    .then(() => {
        console.log('updated succes');
        res.redirect('/')
    })
    .catch((err) => {
        console.log(err);
    })


})




module.exports = router;
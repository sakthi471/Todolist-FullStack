const router = require('express').Router();

const { default: mongoose } = require('mongoose');
const Todo = require('../models/todo')


router.post('/add', (req, res) => {
    const todo = req.body.todo;
    const newTodo = new Todo({ todo: todo })
    newTodo.save().then(() => {
        console.log('successfully added todo');
        res.redirect('/')
    }).catch(err => console.log(err))

}).get('/delete/todo/:_id', async (req, res) => {
    try {
        const id = req.params._id;

        // Check if the provided _id is a valid ObjectId
        if (!mongoose.Types.ObjectId.isValid(id)) {
            
            return res.status(400).json({ error: 'Invalid ID format' ,id});
        }

        // Attempt to delete the todo item
        const result = await Todo.deleteOne({ _id: id });

        if (result.deletedCount === 0) {
            // If no todo item was deleted (probably due to non-existent ID)
            return res.status(404).json({ error: 'Todo item not found' });
        }

        console.log('Todo item deleted successfully');
        res.redirect('/');
    } catch (error) {
        console.error('Error deleting todo item:', error);
        res.status(500).json({ error: 'Internal server error' });
    }


})


router.post('/update/', async (req, res) => {
    const _id = req.query._id;
    const updateDate = req.body.todo;

    const doc = await Todo.findByIdAndUpdate(_id, { todo: updateDate })
        .then(() => {
            console.log('updated succes');
            res.redirect('/')
        })
        .catch((err) => {
            console.log(err);
        })


})




module.exports = router;
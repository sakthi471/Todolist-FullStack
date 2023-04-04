const { model } = require('mongoose');
const Todo = require('../models/todo')

const router = require('express').Router();

router.get('/', async (req, res) => {

    const allTodo = await Todo.find();

    if (req.query.update) {
        const id = req.query.update;
        var data = await Todo.findById(id)
    }

    res.render('index', { todo: allTodo,update:data})
   

})




module.exports = router;
const { response } = require('express');
var express = require('express');
var router = express.Router();
var Todo = require("../models/Todo.js");



// Get all todos
router.get('/', (req, res) => {
    const promise = Todo.find({});

    promise.then((data) => {
        res.json(data);
    }).catch((err) => {
        res.json(err);
    });
});


// Get a single todo
router.get('/:todo_id', (req, res) => {
    const promise = Todo.findById(req.params.todo_id);

    promise.then((data) => {
        res.json(data);
    }).catch((err) => {
        res.json(err);
    });
});

// Add a todo
router.post('/', (req, res) => {
    const todo = new Todo(req.body);
    const promise = todo.save();

    promise.then((data) => {
        res.json(data);
    }).catch((err) => {
        res.json(err);
    });
});

// Update a todo
router.put('/:todo_id', (req, res) => {
    const promise = Todo.findByIdAndUpdate(
        req.params.todo_id,
        req.body);

    promise.then((data) => {
        res.json(data);
    }).catch((err) => {
        res.json(err);
    });
});

// Delete a todo
router.delete('/:todo_id', (req, res) => {
    const promise = Todo.findByIdAndRemove(req.params.todo_id);

    promise.then((data) => {
        res.json(data);
    }).catch((err) => {
        res.json(err);
    });
});

module.exports = router;
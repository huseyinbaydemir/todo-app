
// var express = require('express');
// var router = express.Router();
// var Todo = require("../models/Todo.js");

import express from 'express';
import Todo from '../models/Todo.js';
const router = express.Router();


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
    const promise = Todo.updateOne({ todoId: req.params.todo_id }, { isDone: true});
    promise.then((data) => {
        res.json(data);
    }).catch((err) => {
        res.json(err);
    });
});

// Delete a todo
router.delete('/:todo_id', (req, res) => {
    
    const promise = Todo.deleteOne({ todoId: req.params.todo_id });

    promise.then((data) => {
        res.json(data);
    }).catch((err) => {
        res.json(err);
    });
});

export default router;
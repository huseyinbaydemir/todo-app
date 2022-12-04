const express = require('express')
const todosRouter = require('./routes/todos.js');
const cors = require('cors'); 
const db = require('./helper/db.js')();
const bp = require('body-parser')

// Create express app
const app = express()
const PORT = 5000;
// cors middleware to prevent cors errors
app.use(cors());

app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))

// respond with "hello world" when a GET request is made to the homepage
app.post('/', (req, res) => {
    res.send('hello world')
})

app.use("/todos", todosRouter);


app.listen(PORT, () => {
    console.log(
        `server ready at http://localhost:${PORT}`
    )
})
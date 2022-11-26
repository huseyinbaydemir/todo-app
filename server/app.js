const express = require('express')
const app = express()
const db = require('./helper/db.js')();
const todosRouter = require('./routes/todos.js');
const PORT = 3000;

const bp = require('body-parser')
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
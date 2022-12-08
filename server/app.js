import express from 'express'
import todosRouter from './routes/todos.js';
import cors from 'cors';
import bp from 'body-parser';
import db from './helper/db.js';

// Connect to database initially
db();

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
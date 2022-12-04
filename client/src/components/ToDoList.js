import Todo from "./Todo";
import { useState, useEffect } from "react";
import axios from "axios";
import {ListGroup} from "react-bootstrap";

export default function ToDoList() {

    const [todos, setTodos] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/todos")
            .then(function (res) {
                console.log(res.data);
                setTodos(res.data);
            });
    }, []);

    return (
        <>
            <h3>TO-DOS</h3>
            <ListGroup>
                {todos.map((todo) => (
                    <Todo key={todo._id} todo={todo} />
                ))}
            </ListGroup>
        </>
    );
}

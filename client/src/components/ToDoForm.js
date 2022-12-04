import { useState } from "react";
import axios from "axios";
import {Button, Form} from 'react-bootstrap';

export default function ToDoForm() {

    const [todo, setTodo] = useState("");

    const AddTodo = () => {
        if (todo) {
            console.log(todo);
            axios.post("http://localhost:5000/todos" , {
                title: todo,
                date: new Date(),
                completed: false,
            })
            .then(function (response) {
                    console.log(response);
                    window.location.reload();
                });
        } else alert("Please enter a todo before add a todo");
    }

    const handleChange = (e) => {
        setTodo(e.target.value);
    }

    return (
      <>
      <h3 className="text-center" >TO-DO APP</h3>
      <Form.Control
        type="text"
        id="inputTodo"
        placeholder="Add A Todo..."
        onChange={handleChange}
      />
      <Button className="mt-2" variant="primary" type="submit" onClick={AddTodo} > Add Todo </Button>
      </>
    );
}
  
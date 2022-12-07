import { useEffect, useState } from "react";
import "./App.css";
import {Card} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

import FormTodo from "./components/FormTodo";
import Todo from "./components/Todo";



function App() {
  const [todos, setTodos] = useState([]);



  const addTodo = text => {
    let params = {
      todoId : new Date().getTime(),
      title : text,
      createdDate: new Date(),
      isDone: false
    }
    const newTodos = [...todos, params];
    axios.post('http://localhost:5000/todos', params)
    setTodos(newTodos);
  };

  const markTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isDone = true;
    setTodos(newTodos);
  };

  const removeTodo = index => {
    const newTodos = [...todos];
    axios.delete('http://localhost:5000/todos/' + newTodos[index].todoId)
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  useEffect(() => {
    axios.get('http://localhost:5000/todos')
    .then(res => {
      setTodos(res.data);
    })
    console.log("todos");
  }, []);

  return (
    <div className="app">
      <div className="container">
        <h1 className="text-center mb-4">Todo List</h1>
        <FormTodo addTodo={addTodo} />
        <div>
          {todos.map((todo, index) => (
            <Card>
              <Card.Body>
                <Todo
                key={index}
                index={index}
                todo={todo}
                markTodo={markTodo}
                removeTodo={removeTodo}
                />
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
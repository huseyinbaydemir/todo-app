import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Todo({ todo, index, markTodo, removeTodo }) {
  console.log(todo);
    return (
      <div className="todo">
        <span style={{ textDecoration: todo.isDone ? "line-through" : "" }}>{todo.title}</span>
        <div>
          <Button variant="outline-success" onClick={() => markTodo(index)}>✓</Button>{' '}
          <Button variant="outline-danger" onClick={() => removeTodo(index)}>✕</Button>
        </div>
      </div>
    );
  }
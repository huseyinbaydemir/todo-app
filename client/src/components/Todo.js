import {Button, InputGroup, ListGroup} from 'react-bootstrap';
import axios from "axios";
import { AiFillDelete } from 'react-icons/ai';


export default function Todo(props) {

    


    const deleteToDo = (e) => {
        let toDoId = e.currentTarget.id;
        axios.delete("http://localhost:5000/todos/" + toDoId)
            .then(function (res) {
                console.log(res);
            });
            // render after delete
            window.location.reload();
    }

    return (
        <>
        <ListGroup.Item className=''>
            <div className="row rounded p-1">
                <div className="col-10">
                    <p>{props.todo.title}</p>
                </div>
                <div className="col-1">
                    <InputGroup>
                        <InputGroup.Checkbox aria-label="Checkbox for completed" />
                    </InputGroup>
                </div>
                <div className="col-1">
                    <Button type="button" id={props.todo._id} onClick={deleteToDo} ><AiFillDelete/></Button>
                </div>
            </div>
        </ListGroup.Item>
        </>
    )
}

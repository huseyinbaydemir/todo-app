import './App.css';
import { Container } from 'react-bootstrap';
import Todos from "./components/Todos";

function App() {

  return (
    <>
    <Container className='mt-5'>
      <Todos />
    </Container>
    </>
  );
}

export default App;

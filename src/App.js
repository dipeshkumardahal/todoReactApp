
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {Container} from 'react-bootstrap';
import ShowTodo from './components/ShowTodo';
import AddTodo from './components/AddTodo';


function App() {
 
  return (
   <Container>
    <AddTodo/>
   </Container>
  );
}

export default App;

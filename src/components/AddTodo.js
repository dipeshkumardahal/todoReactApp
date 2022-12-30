import React, {useState} from 'react'
import { Button, Form } from 'react-bootstrap'
import { Col, Row, Card } from 'react-bootstrap';
import { FaBeer } from "react-icons/fa";

function AddTodo() {
    const initialData = JSON.parse(localStorage.getItem("todos"));
    const [text, setText] = useState("");
    const [todo, setTodo]=useState([...initialData]); 

    const addTodo = ()=>{
        const newTodo =[
            ...todo,
            {
            task: text,
            date: new Date().toLocaleString(),
            isComplete: false
        }];
        setText("");
        setTodo(newTodo);
        localStorage.setItem("todos",JSON.stringify(newTodo));
    }
    const completeTodo = (idx) =>{
        const newTodo = todo.map((data, index)=>{
            if(index===idx){
                return {...data, isComplete: !data.isComplete}
            }
            else return data;
        });
        setTodo(newTodo);
        localStorage.setItem("todos",JSON.stringify(newTodo));
    };
    const deleteTodo = (idx)=>{
        const newTodo = todo.filter((data, index)=>{
            if(index==idx){
                return false;
            }
            else return true;
        })
        setTodo(newTodo);
        localStorage.setItem("todos",JSON.stringify(newTodo));
    }
  return (
    <div>
    <Form className='mt-5 text-center'>
        <Form.Control type='text' value={text} placeholder='Enter Your Task' onChange={(e)=>setText(e.target.value)} onKeyPress={(e)=>e.key=='Enter'&& addTodo()} />
        <Button className='my-3' variant='primary' onClick={addTodo}> ADD </Button>
    </Form>
    {
        todo.length>0?todo.map((data, index)=>{
        return <Row className='my-3'>
                <Col xs={10}>
                    <Card onClick={()=>completeTodo(index)} style={{cursor:"pointer",textDecoration:data.isComplete?"line-through":"none"}}>
                        <Card.Body>
                        <Card.Title>{data.task}</Card.Title>
                        <Card.Text>{data.date}</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={2}>
                    <FaBeer color='#aa0000' size={50} className="mt-3" onClick={()=>deleteTodo(index)}/>
                </Col>
                </Row>
            }):"No Task Added"
            }
  </div>
  )
}

export default AddTodo
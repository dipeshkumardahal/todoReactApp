import React from 'react'
import { Col, Row, Card } from 'react-bootstrap';
import { FaBeer } from "react-icons/fa";

function ShowTodo() {
  return (
    <Row className='my-3'>
      <Col sm={10}>
      <Card>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          13/10/2015
        </Card.Text>
      </Card.Body>
    </Card>
      </Col>
      <Col sm={2}>
        <FaBeer color='#aa0000' size={50} className="mt-3"/>
      </Col>
    </Row>
  )
}

export default ShowTodo
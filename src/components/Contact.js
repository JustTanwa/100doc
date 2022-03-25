import React, { useRef } from 'react';
import { Card, Container, Form, Button, Row, Col} from 'react-bootstrap';

export default function Contact() {
    const nameRef = useRef();
    const emailRef = useRef();
    const messageRef = useRef();
    return (
        <Container className="mt-3 d-flex align-items-center flex-column">
            <h2 className="text-center pb-5">Contact</h2>
            <main className="pb-5">
                <Card style={{ width: "40rem" }}>
                <Card.Body>
                    <Form>
                        <Form.Group id="name" className="mb-2" as={Row}>
                            <Form.Label column sm="2">Your name</Form.Label>
                            <Col sm="10">
                                <Form.Control type="text" ref={nameRef} required />
                            </Col>
                        </Form.Group>
                        <Form.Group id="email" className="mb-2" as={Row}>
                            <Form.Label column sm="2">Email</Form.Label>
                            <Col sm="10">
                                <Form.Control type="email" ref={emailRef} required />   
                            </Col>
                        </Form.Group>
                        <Form.Group id="message" className="mb-2" as={Row}>
                            <Form.Label column sm="2">Message</Form.Label>
                            <Col sm="10">
                                <Form.Control as="textarea" rows={5} ref={messageRef} required /> 
                            </Col>
                        </Form.Group>
                        <Row className="d-flex justify-content-center">
                            <Button type="submit" className="mt-2" style={{width: "auto"}}>Send message</Button>
                        </Row>
                        
                    </Form>
                </Card.Body>
            </Card>
            </main>
            
        </Container>
    )
}

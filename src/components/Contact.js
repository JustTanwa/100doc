import React, { useRef, useState } from 'react';
import { Card, Container, Form, Button, Row, Col, Alert } from 'react-bootstrap';

export default function Contact() {
    const nameRef = useRef();
    const emailRef = useRef();
    const messageRef = useRef();

    const [notification, setNotification] = useState("")
    const [error, setError] = useState("")

    function handleSubmit(e) {
        e.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const message = messageRef.current.value;

        try {
            setNotification(`Thank you ${name} for you message, we will respond within 48 hours`);
            nameRef.current.value = "";
            emailRef.current.value = "";
            messageRef.current.value = "";
        } catch {
            setError("Unable to send message.")
        }


    }

    return (
        <Container className="mt-3 d-flex align-items-center flex-column">
            <h2 className="text-center pb-5">Contact</h2>
            <main className="pb-5">
                <Card style={{ width: "38rem" }}>
                    <Card.Body>
                        {notification && <Alert variant="success">{notification}</Alert>}
                        <Form onSubmit={handleSubmit}>
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
                                <Button type="submit" className="mt-2" style={{ width: "auto" }} >Send message</Button>
                            </Row>

                        </Form>
                    </Card.Body>
                </Card>
            </main>

        </Container>
    )
}

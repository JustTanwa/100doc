import React, { useState } from 'react';
import { Card, Container, Form, Button, Row, Col, Alert } from 'react-bootstrap';

export default function Contact() {

    const [notification, setNotification] = useState("");

    return (
        <Container className="mt-3 d-flex align-items-center flex-column">
            <h2 className="text-center pb-5">Contact</h2>
            <Row className="contact">
                <Card>
                    <Card.Body>
                        {notification && <Alert variant="success">{notification}</Alert>}
                        <Form name="contact" method="post">
                            <input type="hidden" name="form-name" value="contact" />
                            <Form.Group id="name" className="mb-2" as={Row}>
                                <Form.Label column md="4">Your name</Form.Label>
                                <Col>
                                    <Form.Control type="text" name="name" required />
                                </Col>
                            </Form.Group>
                            <Form.Group id="email" className="mb-2" as={Row}>
                                <Form.Label column md="4">Email</Form.Label>
                                <Col >
                                    <Form.Control type="email" name="email" required />
                                </Col>
                            </Form.Group>
                            <Form.Group id="message" className="mb-2" as={Row}>
                                <Form.Label column md="4">Message</Form.Label>
                                <Col>
                                    <Form.Control as="textarea" rows={5} name="message" required />
                                </Col>
                            </Form.Group>
                            <Row className="d-flex justify-content-center">
                                <Button type="submit" className="mt-2" style={{ width: "auto" }} >Send message</Button>
                            </Row>

                        </Form>
                    </Card.Body>
                </Card>
            </Row>

        </Container>
    )
}

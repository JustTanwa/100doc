import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Navbar, Row, Col, Button } from "react-bootstrap";
import 'highlight.js/styles/atom-one-dark.css';
import Highlight from "react-highlight";
import { problem52, solution52 } from "./ProjectEuler";

function App() {
  const [answer, setAnswer] = useState("");
  const [toggleAnswer, setToggleAnswer] = useState(false)

  const showAnswer = () => {
    setAnswer(solution52());
    setToggleAnswer(!toggleAnswer);
  }

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/" style={{ marginLeft: "1em" }}>100DOC</Navbar.Brand>
        <Container fluid className="justify-content-end">
          <Nav>
            <Nav.Link href="#today">Today</Nav.Link>
            <Nav.Link href="#archive">Archive</Nav.Link>
            <Nav.Link href="#blog">Blog</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <main>
        <h2 className="text-center mt-5 mb-5">Welcome, follow along on my journey to code for 100 days</h2>
        <Container className="w-80 h-75 justify-content-center position-relative">
          <Row>
            <Col lg={8}>
              <Highlight>
              {`function solution52() {
    let x = 0;
    for (let i = 10 ; i < Infinity; i++) {
        x = i;
        const multiples = [2 * x, 3 * x, 4 * x, 5 * x, 6 * x];
        const digits = getDigits(x);
        const multiplesDigits = multiples.map(getDigits);

        if (checkForPermutation(digits, multiplesDigits)) {
          break;
        }
    }

    function checkForPermutation(num, multiples) {
        return multiples.every( multiplesDigitArr => multiplesDigitArr.every( digit => num.includes(digit)));
    }

    function getDigits(num) {
        const numArr = num.toString().split('')
        return numArr.map( digit => +digit);
    }

    return x;
  }`}
              </Highlight>
            </Col>
            <Col>
              <section>
                <p>Day 1: Solving one of Project Euler's problems</p>
                <p><strong>{problem52.name}</strong></p>
                <p>{problem52.question}</p>
                {toggleAnswer && <p className="answer">{answer}</p>}
                <Button variant="secondary" type="button" onClick={showAnswer}>Run solution</Button>
              </section>
            </Col>
          </Row>
        </Container>
      </main>
    </>
  );
}

export default App;

import React, { useState } from 'react';
import Highlight from 'react-highlight';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { problem52, solution52 } from "../ProjectEuler";

export default function Day1() {
    
  const [answer, setAnswer] = useState("");
  const [toggleAnswer, setToggleAnswer] = useState(false)

  const showAnswer = () => {
    setAnswer(solution52());
    setToggleAnswer(!toggleAnswer);
  }

  return (
    <main>
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
                <Button variant="secondary" type="button" onClick={showAnswer}>{toggleAnswer? "Hide": "Run"} solution</Button>
              </section>
            </Col>
          </Row>
        </Container>
      </main>
  )
}

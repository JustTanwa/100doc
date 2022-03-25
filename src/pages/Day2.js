import React, { useState } from 'react';
import Highlight from 'react-highlight';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { problem16 } from '../ProjectEuler';
import 'highlight.js/styles/atom-one-dark.css';

export default function Day2() {
    
  const [answer, setAnswer] = useState("");
  const [toggleAnswer, setToggleAnswer] = useState(false)

  const showAnswer = () => {
    setAnswer(problem16.solution);
    setToggleAnswer(!toggleAnswer);
  }

  return (
    <main>
        <Container className="w-80 h-75 justify-content-center position-relative">
          <Row>
            <Col lg={8}>
              <Highlight className="language-javascript">
                  {`function solution16(n=2, p=1000) {
   let bigIntNum = BigInt(Math.pow(n, p));

   function sumOfDigits(num) {
      return num.toString().split("")
        .map( digit => +digit)
        .reduce( (digit, tot) => tot + digit, 0);
   }

   return sumOfDigits(bigIntNum);
}`}
              </Highlight>
            </Col>
            <Col>
              <section>
                <p>Day 2: Solving one of Project Euler's problems</p>
                <p><strong>{problem16.name}</strong></p>
                <p dangerouslySetInnerHTML={{ __html: problem16.question }}></p>
                {toggleAnswer && <p className="answer">{answer}</p>}
                <Button variant="secondary" type="button" onClick={showAnswer}>{toggleAnswer? "Hide": "Run"} solution</Button>
              </section>
            </Col>
          </Row>
        </Container>
      </main>
  )
}

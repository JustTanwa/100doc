import React, { useState } from 'react';
import Highlight from 'react-highlight';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { problem35 } from '../ProjectEuler';
import 'highlight.js/styles/atom-one-dark.css';

export default function Day3() {
    
  const [answer, setAnswer] = useState("");
  const [toggleAnswer, setToggleAnswer] = useState(false)

  const showAnswer = () => {
    setAnswer(problem35.solution);
    setToggleAnswer(!toggleAnswer);
  }

  return (
    <main>
        <Container className="w-80 h-75 justify-content-center position-relative">
          <Row>
            <Col lg={8} style={{overflowY: "scroll", maxHeight: "550px"}}>
              <Highlight className="language-javascript">
                  {`function solution35() {
    let circularPrimes = [];
    
    function isPrime(number) {
        // 2 is first prime
        if (number === 2) return true;
        // even numbers are not prime
        if (number % 2 === 0) return false;
        // the divisors are repeats after sqrt of n
        const sqrt = Math.floor(Math.sqrt(number));
        for (let i = 3; i <= sqrt; i++) {
            // if there are other divisor besides 1 and n then its not prime
            if (number % i === 0) return false;
        }
        return true;
    }
    function isCircular( prime ) {
        let rotatedPrimes = []; // containing all variations of the rotated primes
        let nextNumber = prime; // next number to rotate

        // deals with rotating the number
        const rotater =  num => {
            let strNum = num.toString().split("");
            strNum.push(strNum.splice(0,1)[0]);
            return strNum.join("");
        }

        // rotate the number depending on the number of digits
        for (let i = 0; i < String(prime).length; i++) {
            rotatedPrimes.push(nextNumber);
            nextNumber = rotater(nextNumber);
        }

        // check if all variations of rotated primes are in fact prime
        return rotatedPrimes.every( newNum => isPrime(Number(newNum)));
    }

    for (let i = 2; i <= 1000000; i++) {
        if (isPrime(i)) {
            if (isCircular(i)) circularPrimes.push(i);
        }
    }
    return circularPrimes.length;
}`}
              </Highlight>
            </Col>
            <Col>
              <section>
                <p>Day 3: Solving one of Project Euler's problems</p>
                <p><strong>{problem35.name}</strong></p>
                <p dangerouslySetInnerHTML={{ __html: problem35.question }}></p>
                {toggleAnswer && <p className="answer">{answer}</p>}
                <Button variant="secondary" type="button" onClick={showAnswer}>{toggleAnswer? "Hide": "Run"} solution</Button>
              </section>
            </Col>
          </Row>
        </Container>
      </main>
  )
}

import React, { useState } from 'react';
import Highlight from 'react-highlight';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { problem43 } from "../ProjectEuler";
import 'highlight.js/styles/atom-one-dark.css';

export default function Day4() {
    
  const [answer, setAnswer] = useState("");
  const [toggleAnswer, setToggleAnswer] = useState(false)

  const showAnswer = () => {
    setAnswer(problem43.solution);
    setToggleAnswer(!toggleAnswer);
  }

  return (
    <main>
        <Container className="w-80 h-75 justify-content-center position-relative">
          <Row>
            <Col lg={8} style={{overflowY: "scroll", maxHeight: "550px"}}>
              <Highlight>
                  {`function solution43() {
    // find all permutations of 1023456789
    const findPermutations = (numStr) => {
        let digits = numStr.split(""); // convert number string to array
        let listOfPermutations = []; // will store list of permutated numbers

        // recursive function to permute the number
        function permute(digitsArr, memo = []) {
            // base case, stop the call if no more digits in the digits arr
            if (digitsArr.length === 0) {
                listOfPermutations.push(memo.join("")); // add the permutated number into the list
            } else {
                for (let i = 0; i < digitsArr.length; i++) {
                    let copyDigitsArr = [...digitsArr];
                    // set current digit and remove from copyDigits array
                    let currentDigit = copyDigitsArr.splice(i, 1); 
                    permute([...copyDigitsArr], memo.concat(currentDigit));
                }
            }
        }
        permute(digits); // start the recursive function
        return listOfPermutations;
    }
    
    const isDivisible = (numStr) => {
        return ( Number(numStr.slice(7,10)) % 17 === 0 &&
        Number(numStr.slice(2,5)) % 3 === 0 &&
        Number(numStr.slice(3,6)) % 5 === 0 &&
        Number(numStr.slice(4,7)) % 7 === 0 &&
        Number(numStr.slice(5,8)) % 11 === 0 &&
        Number(numStr.slice(6,9)) % 13 === 0 &&
        Number(numStr.slice(1,4)) % 2 === 0 );
    }

    const allPandigitals = findPermutations("1234567890")
                            .filter( numstr => isDivisible(numstr));


    return allPandigitals.reduce( (prev, next) => Number(prev) + Number(next), 0);
}`}
              </Highlight>
            </Col>
            <Col>
              <section>
                <p>Day 4: Solving one of Project Euler's problems</p>
                <p><strong>{problem43.name}</strong></p>
                <p dangerouslySetInnerHTML={{ __html: problem43.question}}></p>
                {toggleAnswer && <p className="answer">{answer}</p>}
                <Button variant="secondary" type="button" onClick={showAnswer}>{toggleAnswer? "Hide": "Run"} solution</Button>
              </section>
            </Col>
          </Row>
        </Container>
      </main>
  )
}

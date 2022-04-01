import React, { useState } from 'react';
import Highlight from 'react-highlight';
import { Container, Row, Col, Button } from 'react-bootstrap';

export default function Day9() {
    const [toggleAnswer, setToggleAnswer] = useState(false)

    const showAnswer = () => {
        setToggleAnswer(!toggleAnswer);
    }

    const codeWars = {
        name: "Greed is Good",
        question: `Greed is a dice game played with five six-sided dice. Your mission, should you choose to accept it, is to score a throw according to these rules. You will always be given an array with five six-sided dice values.
        <br>
        <br>
        <div style="background-color: rgb(10,10,10); padding: 1em 1em">
            <code style="color: #fff">
        Three 1's => 1000 points <br>
        Three 6's =>  600 points <br>
        Three 5's =>  500 points <br>
        Three 4's =>  400 points <br>
        Three 3's =>  300 points <br>
        Three 2's =>  200 points <br>
        One   1   =>  100 points <br>
        One   5   =>   50 point
            </code>
        </div>
        <br>
       A single die can only be counted once in each roll. For example, a given "5" can only count as part of a triplet (contributing to the 500 points) or as a single 50 points, but not both in the same roll.
        `,
        level: "5 kyu"
    }

    const blurSolution = {
        width: "calc(50% - 24px)",
        height: "100%",
        paddingRight: "12px",
        backgroundColor: "rgba(255, 255, 255, 0.2)",
        top: 0,
        WebkitBackdropFilter: "blur(10px)",
        backdropFilter: "blur(10px)",
    }

    return (
        <main>
            <Container className="w-80 h-75 justify-content-center position-relative">
                <Row>
                    <Col lg={6} style={toggleAnswer ? { overflowY: "scroll", maxHeight: "550px" } : { overflow: 'hidden', maxHeight: "550px" }}>
                        <div className="code-container position-relative">
                            <Highlight className="language-javascript" >
                                {`function score( dice ) {
  let score = 0;
  // count occurrence of each number and store as object
  const diceCount = dice.reduce((obj,value) => {
    obj[value] ? obj[value]++ : obj[value] = 1;
    return obj;
  }, {});
  // loop through each number that occurred and update score
  for (let number in diceCount) {
    switch(number) {
        case "1":
          diceCount[number] >= 3 ? 
            score += 1000 + (diceCount[number] % 3 * 100): 
            score += diceCount[number] * 100;
          break;
        case "2":
          diceCount[number] >= 3 ? score += 200: score += 0;
          break;
        case "3":
          diceCount[number] >= 3 ? score += 300: score += 0;
          break;
        case "4":
          diceCount[number] >= 3 ? score += 400: score += 0;
          break;
        case "5":
          diceCount[number] >= 3 ? 
            score += 500 + (diceCount[number] % 3 * 50): 
            score += diceCount[number] * 50;
          break;
        case "6":
          diceCount[number] >= 3 ? score += 600: score += 0;
          break;
        default:
          break;
    }
  }
  return score;
}`}
                            </Highlight>
                        </div>
                        <div className='overlay position-absolute' style={toggleAnswer ? null : blurSolution}>
                        </div>
                    </Col>
                    <Col>
                        <section>
                            <p>Day 9: Solving one of the Kata on CodeWars</p>
                            <p><strong>{codeWars.name}</strong> {codeWars.level}</p>
                            <p dangerouslySetInnerHTML={{ __html: codeWars.question }}></p>
                            <Button variant="secondary" type="button" onClick={showAnswer}>{toggleAnswer ? "Hide" : "Show"} solution</Button>
                        </section>
                    </Col>
                </Row>
            </Container>
        </main>
    )
}

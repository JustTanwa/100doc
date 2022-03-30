import React, { useState } from 'react';
import Highlight from 'react-highlight';
import { Container, Row, Col, Button } from 'react-bootstrap';

export default function Day7() {
    const [toggleAnswer, setToggleAnswer] = useState(false)

    const showAnswer = () => {
        setToggleAnswer(!toggleAnswer);
    }

    const codeWars = {
        name: "Scramblies",
        question: `Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.
        <br>
        <br>
        Notes:
        <br>
        Only lower case letters will be used (a-z). No punctuation or digits will be included.
        Performance needs to be considered.
        <br>
        <br>
        Examples
        <br>
        <br>
        <div style="background-color: rgb(10,10,10); padding: 1em 1em">
        <code style="color: white">
        scramble('rkqodlw', 'world') ==> True
        scramble('cedewaraaossoqqyt', 'codewars') ==> True
        scramble('katas', 'steak') ==> False
        </code>
        </div>
        `,
        level: "5 kyu"
    }

    const blurSolution = {
        width: "calc(67% - 24px)",
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
                    <Col lg={8} style={toggleAnswer ? { overflowY: "scroll", maxHeight: "550px" } : { overflow: 'hidden', maxHeight: "550px" }}>
                        <div className="code-container position-relative">
                            <Highlight className="language-javascript" >
                                {`function scramble(str1, str2) {
 // simple case 
  const length1 = str1.length;
  const length2 = str2.length;
  if (length1 < length2) return false;
  
  const str2Letters = str2.split("");
  const str1Letters = str1.split("");
  
  function groupAlphabets(arr) {
    let alphabetGrouping = {}
    arr.forEach( letter => {
      if (alphabetGrouping[letter]) {
        alphabetGrouping[letter] += 1;
      } else {
        alphabetGrouping[letter] = 1;
      }
    });
    return alphabetGrouping;
  }
  
  let str1Grouping = groupAlphabets(str1Letters);
  let str2Grouping = groupAlphabets(str2Letters);
  
  for (let letter in str2Grouping) {
    if (!str1Grouping[letter] || str1Grouping[letter] < str2Grouping[letter]) return false;
  }
  return true;
}`}
                            </Highlight>
                        </div>
                        <div className='overlay position-absolute' style={toggleAnswer ? null : blurSolution}>
                        </div>
                    </Col>
                    <Col>
                        <section>
                            <p>Day 7: Solving one of the Kata on CodeWars</p>
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

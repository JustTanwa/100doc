import React, { useState } from 'react';
import Highlight from 'react-highlight';
import { Container, Row, Col, Button } from 'react-bootstrap';
import 'highlight.js/styles/atom-one-dark.css';

export default function Day5() {
    const [toggleAnswer, setToggleAnswer] = useState(false)

    const showAnswer = () => {
        setToggleAnswer(!toggleAnswer);
    }

    const codeWars = {
        name: "Human Readable Time",
        question: `Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS).
    <br>
    <br>
    HH = hours, padded to 2 digits, range: 00 - 99
    MM = minutes, padded to 2 digits, range: 00 - 59
    SS = seconds, padded to 2 digits, range: 00 - 59
    <br>
    <br>
    The maximum time never exceeds 359999 (99:59:59)`,
        level: "5 kyu"
    }

    const blurSolution = {
        width: "calc(100% - 24px)",
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
                    <Col lg={8} className="position-relative">
                        <Highlight className="language-javascript">
                            {`function humanReadable (seconds) {
  // handle error input
  if (seconds > 359999) return "Sorry, too many seconds for HH:MM:SS format";
  // workout number of hours, minutes and seconds
  let HH = Math.floor(seconds / 3600);
  let MM = Math.floor(seconds / 60) % 60;
  let SS = seconds % 60;
  
  // reformat to add leading zero for numbers less than 10
  HH = HH < 10 ? "0" + HH: HH;
  MM = MM < 10 ? "0" + MM: MM;
  SS = SS < 10 ? "0" + SS: SS;
  
  return HH + ":" + MM + ":" + SS;
}`}
                        </Highlight>
                        <div className='overlay position-absolute' style={ toggleAnswer ? null : blurSolution }>
                        </div>
                    </Col>
                    <Col>
                        <section>
                            <p>Day 5: Solving one of the Kata on CodeWars</p>
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

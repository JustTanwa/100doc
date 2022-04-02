import React, { useState } from 'react';
import Highlight from 'react-highlight';
import { Container, Row, Col, Button } from 'react-bootstrap';

export default function Day10() {
	const [toggleAnswer, setToggleAnswer] = useState(false);

	const showAnswer = () => {
		setToggleAnswer(!toggleAnswer);
	};

	const codeWars = {
		name: 'Rot13',
		question: `ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.
        <br>
        <br>
        Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".`,
		level: '5 kyu',
	};

	return (
		<main>
			<Container className='w-80 h-75 justify-content-center position-relative'>
				<Row>
					<Col
						lg={6}
						style={
							toggleAnswer
								? { overflowY: 'auto', maxHeight: '550px' }
								: { overflow: 'hidden', maxHeight: '550px' }
						}
					>
						<div className='code-container position-relative'>
							<Highlight className='language-javascript'>
								{`function rot13(message) {
  function shiftBy13(letter) {
    const charCode = letter.charCodeAt(0);
    if ( charCode >= 65 && charCode <=90) {
      return charCode + 13 > 90 ? 
        String.fromCharCode(charCode + 13 - 26) : 
        String.fromCharCode(charCode + 13);
    } else if (charCode >= 97 && charCode <= 122) {
      return charCode + 13 > 122 ? 
        String.fromCharCode(charCode + 13 - 26) : 
            String.fromCharCode(charCode + 13);
    }
  }
  return message.replace(/[A-Za-z]/g, shiftBy13);
  `}
							</Highlight>
							<div
								className={'overlay position-absolute' + (toggleAnswer ? "" : " overlayBlur")}
							></div>
						</div>
					</Col>
					<Col>
						<section>
							<p>Day 10: Solving one of the Kata on CodeWars</p>
							<p>
								<strong>{codeWars.name}</strong> {codeWars.level}
							</p>
							<p dangerouslySetInnerHTML={{ __html: codeWars.question }}></p>
							<Button variant='secondary' type='button' onClick={showAnswer}>
								{toggleAnswer ? 'Hide' : 'Show'} solution
							</Button>
						</section>
					</Col>
				</Row>
			</Container>
		</main>
	);
}

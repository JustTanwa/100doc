import React, { useState } from 'react';
import Highlight from 'react-highlight';
import { Container, Row, Col, Button } from 'react-bootstrap';

export default function Day14() {
	const [toggleAnswer, setToggleAnswer] = useState(false);

	const showAnswer = () => {
		setToggleAnswer(!toggleAnswer);
	};

	const codeWars = {
		name: 'Large Factorials',
		question: `In mathematics, the factorial of integer n is written as n!. It is equal to the product of n and every integer preceding it. For example: 5! = 1 x 2 x 3 x 4 x 5 = 120.
        <br>
        <br>
        Your mission is simple: write a function that takes an integer n and returns the value of n!.
        <br>
        You are guaranteed an integer argument. For any values outside the non-negative range, return null, nil or None (return an empty string "" in C and C++). For non-negative numbers a full length number is expected for example, return 25! = "15511210043330985984000000" as a string.
        <br><br>
        NOTES:
        <br>
        The use of BigInteger or BigNumber functions has been disabled, this requires a complex solution.
        `,
		level: '4 kyu',
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
								{`// helper function to multiply numbers
const multiply = (num1, num2) => {
  // @params num1, num2 are array of digits in
  // reversed order
  let result = [];
  outer: for(let i = 0; i < num2.length; i++) {
    let carry = 0;
    inner: for(let j = 0; j < num1.length; j++) {
      let product = num2[i] * num1[j];
      if (carry !== 0 ) {
        product += carry;
      }
      if (result[i + j]) {
        product += result[i + j];
      }
      carry = Math.floor(product / 10);
      result[i + j] = product % 10;
    }
    // end of inner loop
    if (carry !== 0) result.push(carry);
  }
  return result;
}
// helper function to convert numbers to 
// digits in reversed order
const toReverseDigits = (number) => {
  let reversedDigits = [];
  while (number > 0) {
    reversedDigits.push(number % 10);
    number = Math.floor(number / 10);
  }
  return reversedDigits;
}

const factorial = n => {
  if (n === 0) return "1";
  if (n === 1) return "1";
  let total = toReverseDigits(n)
  for (let i = n; i > 1; i--) {
    total = multiply(total, toReverseDigits(i - 1));
  }
  return total.reverse().join("");
}`}
							</Highlight>
							<div
								className={
									'overlay position-absolute' +
									(toggleAnswer ? '' : ' overlayBlur')
								}
							></div>
						</div>
					</Col>
					<Col lg={6}>
						<section>
							<p>Day 14: Solving one of the Kata on CodeWars</p>
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

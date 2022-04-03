import React, { useState } from 'react';
import Highlight from 'react-highlight';
import { Container, Row, Col, Button } from 'react-bootstrap';

export default function Day11() {
	const [toggleAnswer, setToggleAnswer] = useState(false);

	const showAnswer = () => {
		setToggleAnswer(!toggleAnswer);
	};

	const codeWars = {
		name: 'The Millionth Fibonacci Kata',
		question: `In this kata you will have to calculate fib(n) where:
        <br>
        <br>
        <div style="background: #000; padding: 1em">
            <code style="color: #fff"> 
                fib(0) := 0 <br>
                fib(1) := 1 <br>
                fin(n + 2) := fib(n + 1) + fib(n) <br>
            </code>
        </div>
        <br>
        Write an algorithm that can handle n up to 2000000.
        <br>
        
        Your algorithm must output the exact integer answer, to full precision. Also, it must correctly handle negative numbers as input.
        <br><br>
        HINT I: Can you rearrange the equation fib(n + 2) = fib(n + 1) + fib(n) to find fib(n) if you already know fib(n + 1) and fib(n + 2)? Use this to reason what value fib has to have for negative values.
        `,
		level: '3 kyu',
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
								{`function fib(n, memo = {}) {
  let bigN = BigInt(n);
  if (bigN in memo) return memo[bigN];
  if (bigN === 0n) return 0n;
  else if (bigN === 1n || bigN === -1n) return 1n;
  if (bigN > 0n) {
    memo[bigN] = fib(bigN - 2n, memo) + fib(bigN - 1n, memo)
    return memo[bigN];
  } else {
    memo[bigN] = fib(bigN + 2n, memo) - fib(bigN + 1n, memo)
    return memo[bigN];
  }
 }
  `}
							</Highlight>
							<div
								className={
									'overlay position-absolute' +
									(toggleAnswer ? '' : ' overlayBlur')
								}
							></div>
						</div>
					</Col>
					<Col>
						<section>
							<p>Day 11: Solving one of the Kata on CodeWars</p>
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

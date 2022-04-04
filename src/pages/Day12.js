import React, { useState } from 'react';
import Highlight from 'react-highlight';
import { Container, Row, Col, Button } from 'react-bootstrap';

export default function Day12() {
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
								{`function fib(n) {
  // check for simple case 
  if (n === 0) return 0n;
  if (n === 1 || n === -1) return 1n;
  
  // handle negative signs for negative n
  let sign = 1n; 
  if (n < 0) {
    // change n to positive for the recursive nthPowerMatrixF
    n *= -1;
    // if negative n is even, we will return F-n = -Fn
    if (-n % 2 === 0) {
      sign = -1n;
    }
  }
  
  /* using Fibonacci matrix approach
  the matrix F below shows the reccurence relation of the
  fibonacci numbers */
  const F = [
    [1n, 1n],
    [1n, 0n]
  ]
  
  
  // helper function to multiply two 2 x 2 matrices
  function multiplyMatrices(F, A) {
    // @params F is the Fibonocci matrix
    // @params A the second matrix to multiply with F.
    // @return return nothing as this function will modify F
    const a = (F[0][0] * A[0][0]) + (F[0][1] * A[1][0]);
	  const b = (F[0][0] * A[0][1]) + (F[0][1] * A[1][1]);
	  const c = (F[1][0] * A[0][0]) + (F[1][1] * A[1][0]);
	  const d = (F[1][0] * A[0][1]) + (F[1][1] * A[1][1]);
    
    F[0][0] = a;
    F[0][1] = b;
    F[1][0] = c;
    F[1][1] = d;
  }
  
  // define nthPowerMatrixF which will be a recursive function
  function nthPowerMatrixF(F, n) {
    // base case of recursive
    if (n === 0 || n === 1) return;
    
    // as we will mutate F, we need a local matrix to represent the
    // original F matrix
    const A = [
      [1n, 1n],
      [1n, 0n]
    ]
    // if n is odd
    if (n % 2 !== 0) {
      nthPowerMatrixF(F, n - 1);
      multiplyMatrices(F,A);
      return;
    }
    
    // if n is even, we can work half n to do less calculations
    // e.g n = 4 we only need to do n = 2, then multiply by it self to get n = 4
    nthPowerMatrixF(F, n / 2);
    multiplyMatrices(F, F);
    
  }
  
  // formula states [Fn, Fn-1] = (F to the power of n - 1) * [1,0]
  nthPowerMatrixF(F, n - 1);
  
  // resultant matrix is [[Fn, Fn-1,], [Fn-1, Fn-2]]
  return sign * F[0][0];
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
							<p>
								Day 12: Solving one of the Kata on CodeWars{' '}
								<strong>Retry optimized</strong>
							</p>
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

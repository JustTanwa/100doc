import React, { useState } from 'react';
import Highlight from 'react-highlight';
import { Container, Row, Col, Button } from 'react-bootstrap';

export default function Day84() {
	const [toggleAnswer, setToggleAnswer] = useState(false);

	const showAnswer = () => {
		setToggleAnswer(!toggleAnswer);
	};

	const leetCode = {
		name: '412. Fizz Buzz',
		question: `<div><p>Given an integer <code>n</code>, return <em>a string array </em><code>answer</code><em> (<strong>1-indexed</strong>) where</em>:</p>

		<ul>
			<li><code>answer[i] == "FizzBuzz"</code> if <code>i</code> is divisible by <code>3</code> and <code>5</code>.</li>
			<li><code>answer[i] == "Fizz"</code> if <code>i</code> is divisible by <code>3</code>.</li>
			<li><code>answer[i] == "Buzz"</code> if <code>i</code> is divisible by <code>5</code>.</li>
			<li><code>answer[i] == i</code> (as a string) if none of the above conditions are true.</li>
		</ul>
		
		<p>&nbsp;</p>
		<p><strong>Example 1:</strong></p>
		<pre><strong>Input:</strong> n = 3
<strong>Output:</strong> ["1","2","Fizz"]
		</pre><p><strong>Example 2:</strong></p>
		<pre><strong>Input:</strong> n = 5
<strong>Output:</strong> ["1","2","Fizz","4","Buzz"]
		</pre><p><strong>Example 3:</strong></p>
		<pre><strong>Input:</strong> n = 15
<strong>Output:</strong> ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]
		</pre>
		<p>&nbsp;</p>
		</div>`,
		level: 'Easy',
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
								{`/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    const answer = [];
    for (let i = 1; i <= n; i++) {
        let word = "";
        if (i % 3 === 0) {
            word += "Fizz";
        }
        if (i % 5 === 0) {
            word += "Buzz";
        }
        if (word === "") {
            word += i;
        }
        
        answer.push(word);
        
    }
    return answer;
};`}
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
							<p>Day 84: Solving one of LeetCode problems</p>
							<p>
								<strong>{leetCode.name}</strong> Difficulty - {leetCode.level}
							</p>
							<p dangerouslySetInnerHTML={{ __html: leetCode.question }}></p>
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

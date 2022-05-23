import React, { useState } from 'react';
import Highlight from 'react-highlight';
import { Container, Row, Col, Button } from 'react-bootstrap';

export default function Day61() {
	const [toggleAnswer, setToggleAnswer] = useState(false);

	const showAnswer = () => {
		setToggleAnswer(!toggleAnswer);
	};

	const leetCode = {
		name: '202. Happy Number',
		question: `<div><p>Write an algorithm to determine if a number <code>n</code> is happy.</p>

        <p>A <strong>happy number</strong> is a number defined by the following process:</p>
        
        <ul>
            <li>Starting with any positive integer, replace the number by the sum of the squares of its digits.</li>
            <li>Repeat the process until the number equals 1 (where it will stay), or it <strong>loops endlessly in a cycle</strong> which does not include 1.</li>
            <li>Those numbers for which this process <strong>ends in 1</strong> are happy.</li>
        </ul>
        
        <p>Return <code>true</code> <em>if</em> <code>n</code> <em>is a happy number, and</em> <code>false</code> <em>if not</em>.</p>
        
        <p>&nbsp;</p>
        <p><strong>Example 1:</strong></p>
        
        <pre><strong>Input:</strong> n = 19
<strong>Output:</strong> true
<strong>Explanation:</strong>
1<sup>2</sup> + 9<sup>2</sup> = 82
8<sup>2</sup> + 2<sup>2</sup> = 68
6<sup>2</sup> + 8<sup>2</sup> = 100
1<sup>2</sup> + 0<sup>2</sup> + 0<sup>2</sup> = 1
        </pre>
        
        <p><strong>Example 2:</strong></p>
        
        <pre><strong>Input:</strong> n = 2
<strong>Output:</strong> false
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
 * @return {boolean}
 */
var isHappy = function(n) {
    // helper function to square digits
    const digitSquare = (n) => {
        let ans = 0;
        while (n > 0) {
            let digit = n % 10;
            ans += digit * digit;
            n = Math.floor(n / 10);
        }
        return ans;
    }

    let seen = new Set();
    let number = n;
    while (!seen.has(number)) {
        seen.add(number);
        number = digitSquare(number);
        if (number === 1) return true;
    }
    return false;
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
							<p>Day 61: Solving one of LeetCode problems</p>
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

import React, { useState } from 'react';
import Highlight from 'react-highlight';
import { Container, Row, Col, Button } from 'react-bootstrap';

export default function Day39() {
	const [toggleAnswer, setToggleAnswer] = useState(false);

	const showAnswer = () => {
		setToggleAnswer(!toggleAnswer);
	};

	const leetCode = {
		name: '8. String to Integer (atoi)',
		question: `<div><p>Implement the <code>myAtoi(string s)</code> function, which converts a string to a 32-bit signed integer (similar to C/C++'s <code>atoi</code> function).</p>

		<p>The algorithm for <code>myAtoi(string s)</code> is as follows:</p>
		
		<ol>
			<li>Read in and ignore any leading whitespace.</li>
			<li>Check if the next character (if not already at the end of the string) is <code>'-'</code> or <code>'+'</code>. Read this character in if it is either. This determines if the final result is negative or positive respectively. Assume the result is positive if neither is present.</li>
			<li>Read in next the characters until the next non-digit character or the end of the input is reached. The rest of the string is ignored.</li>
			<li>Convert these digits into an integer (i.e. <code>"123" -&gt; 123</code>, <code>"0032" -&gt; 32</code>). If no digits were read, then the integer is <code>0</code>. Change the sign as necessary (from step 2).</li>
			<li>If the integer is out of the 32-bit signed integer range <code>[-2<sup>31</sup>, 2<sup>31</sup> - 1]</code>, then clamp the integer so that it remains in the range. Specifically, integers less than <code>-2<sup>31</sup></code> should be clamped to <code>-2<sup>31</sup></code>, and integers greater than <code>2<sup>31</sup> - 1</code> should be clamped to <code>2<sup>31</sup> - 1</code>.</li>
			<li>Return the integer as the final result.</li>
		</ol>
		
		<p>&nbsp;</p>
		<p><strong>Example 1:</strong></p>
		
		<pre><strong>Input:</strong> s = "42"
<strong>Output:</strong> 42
<strong>Explanation:</strong> The underlined characters are what is read in, the caret is the current reader position.
Step 1: "42" (no characters read because there is no leading whitespace)
		 ^
Step 2: "42" (no characters read because there is neither a '-' nor '+')
		 ^
Step 3: "<u>42</u>" ("42" is read in)
		   ^
The parsed integer is 42.
Since 42 is in the range [-2<sup>31</sup>, 2<sup>31</sup> - 1], the final result is 42.
		</pre>
		
		<p><strong>Example 2:</strong></p>
		
		<pre><strong>Input:</strong> s = "   -42"
<strong>Output:</strong> -42
<strong>Explanation:</strong>
Step 1: "<u>   </u>-42" (leading whitespace is read and ignored)
			^
Step 2: "   <u>-</u>42" ('-' is read, so the result should be negative)
			 ^
Step 3: "   -<u>42</u>" ("42" is read in)
			   ^
The parsed integer is -42.
Since -42 is in the range [-2<sup>31</sup>, 2<sup>31</sup> - 1], the final result is -42.
		</pre>
		
		<p><strong>Example 3:</strong></p>
		
		<pre><strong>Input:</strong> s = "4193 with words"
<strong>Output:</strong> 4193
<strong>Explanation:</strong>
Step 1: "4193 with words" (no characters read because there is no leading whitespace)
		 ^
Step 2: "4193 with words" (no characters read because there is neither a '-' nor '+')
		 ^
Step 3: "<u>4193</u> with words" ("4193" is read in; reading stops because the next character is a non-digit)
			 ^
The parsed integer is 4193.
Since 4193 is in the range [-2<sup>31</sup>, 2<sup>31</sup> - 1], the final result is 4193.
		</pre>
		
		<p>&nbsp;</
		</div>`,
		level: 'Medium',
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
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    const arrOfStrings = s.trim().split("");
    let sign = null;
    if (arrOfStrings[0] === "-") {
        arrOfStrings.splice(0, 1);
        sign = -1;
    } else if (arrOfStrings[0] === "+") {
        arrOfStrings.splice(0, 1);
    }
    // convert to number
    let number = 0;
    for (let i = 0; i < arrOfStrings.length; i++) {
        if (arrOfStrings[i].charCodeAt(0) >= 48 && arrOfStrings[i].charCodeAt(0) <= 57) {
            number = 10*number + (arrOfStrings[i].charCodeAt(0) - 48);
        } else if (arrOfStrings[i] = " ") {
            break;
        }
    }
    number = sign ? sign * number: number;
    const MAX = 2**31 - 1;
    const MIN = -(2**31);
    if (number > MAX) return MAX;
    if (number < MIN) return MIN;
    return number;
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
							<p>Day 39: Solving one of LeetCode problems</p>
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

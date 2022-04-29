import React, { useState } from 'react';
import Highlight from 'react-highlight';
import { Container, Row, Col, Button } from 'react-bootstrap';

export default function Day37() {
	const [toggleAnswer, setToggleAnswer] = useState(false);

	const showAnswer = () => {
		setToggleAnswer(!toggleAnswer);
	};

	const leetCode = {
		name: '5. Longest Palindromic Substring',
		question: `<div><p>Given a string <code>s</code>, return <em>the longest palindromic substring</em> in <code>s</code>.</p>

		<p>&nbsp;</p>
		<p><strong>Example 1:</strong></p>
		
		<pre><strong>Input:</strong> s = "babad"
<strong>Output:</strong> "bab"
<strong>Explanation:</strong> "aba" is also a valid answer.
		</pre>
		
		<p><strong>Example 2:</strong></p>
		
		<pre><strong>Input:</strong> s = "cbbd"
<strong>Output:</strong> "bb"
		</pre>
		
		<p>&nbsp;</p>
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
 * @return {string}
 */
var longestPalindrome = function(s) {
	// simple case
    if (s.length < 2) return s;
    let result = "";
    
	// helper function
    const findPalindrome = (s, pos1, pos2) => {
        while (pos1 >= 0 && pos2 < s.length && s[pos1] === s[pos2]) {
            pos1--;
            pos2++;
        }
        return s.slice(pos1 + 1, pos2);
    }
    
    for (let i = 0; i < s.length; i++) {
        const oddPalindrome = findPalindrome(s, i, i);
        const evenPalindrome = findPalindrome(s, i, i + 1);
		// update longest palindromic string
        result = result.length > oddPalindrome.length? result: oddPalindrome;
        result = result.length > evenPalindrome.length? result: evenPalindrome;
    }
    
    return result;
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
							<p>Day 37: Solving one of LeetCode problems</p>
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

import React, { useState } from 'react';
import Highlight from 'react-highlight';
import { Container, Row, Col, Button } from 'react-bootstrap';

export default function Day15() {
	const [toggleAnswer, setToggleAnswer] = useState(false);

	const showAnswer = () => {
		setToggleAnswer(!toggleAnswer);
	};

	const leetCode = {
		name: '3. Longest Substring Without Repeating Characters',
		question: `<div><p>Given a string <code>s</code>, find the length of the <strong>longest substring</strong> without repeating characters.</p>
        <p><strong>Example 1:</strong></p>
        
        <pre><strong>Input:</strong> s = "abcabcbb"
<strong>Output:</strong> 3
<strong>Explanation:</strong> The answer is "abc", with the length of 3.
        </pre>
        <p><strong>Example 2:</strong></p>
        
        <pre><strong>Input:</strong> s = "bbbbb"
<strong>Output:</strong> 1
<strong>Explanation:</strong> The answer is "b", with the length of 1.
        </pre>
        
        <p><strong>Example 3:</strong></p>
        
        <pre><strong>Input:</strong> s = "pwwkew"
<strong>Output:</strong> 3
<strong>Explanation:</strong> The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
        </pre>
        
        <p><strong>Constraints:</strong></p>
        
        <ul>
            <li><code>0 &lt;= s.length &lt;= 5 * 10<sup>4</sup></code></li>
            <li><code>s</code> consists of English letters, digits, symbols and spaces.</li>
        </ul>
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
								{`var lengthOfLongestSubstring = function(s) {
    let start = 0;
    let end = 0;
    let maxLength = 0;
    
    if (s === "") return 0;
    if (s.length === 1) return 1;
    
    let substring = new Set();
    
    for (end; end < s.length;) {
        if (!substring.has(s[end])) {
            substring.add(s[end]);
            maxLength = Math.max(maxLength, substring.size);
            end++;
        } else {
            substring.delete(s[start]);
            start++;
            
        }
    }
    return maxLength;
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
							<p>
								Day 15: Solving one of LeetCode problems
							</p>
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

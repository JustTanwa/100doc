import React, { useState } from 'react';
import Highlight from 'react-highlight';
import { Container, Row, Col, Button } from 'react-bootstrap';

export default function Day89() {
	const [toggleAnswer, setToggleAnswer] = useState(false);

	const showAnswer = () => {
		setToggleAnswer(!toggleAnswer);
	};

	const leetCode = {
		name: '387. First Unique Character in a String',
		question: `<div><p>Given a string <code>s</code>, <em>find the first non-repeating character in it and return its index</em>. If it does not exist, return <code>-1</code>.</p>

		<p>&nbsp;</p>
		<p><strong>Example 1:</strong></p>
		<pre><strong>Input:</strong> s = "leetcode"
<strong>Output:</strong> 0
		</pre><p><strong>Example 2:</strong></p>
		<pre><strong>Input:</strong> s = "loveleetcode"
<strong>Output:</strong> 2
		</pre><p><strong>Example 3:</strong></p>
		<pre><strong>Input:</strong> s = "aabb"
<strong>Output:</strong> -1
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
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let count = {}
    let ans = -1;
    for (let letter of s) {
        if (!count[letter]) {
            count[letter] = 0;
        }
        count[letter]++;
    }
    
    for (let key in count) {
        if (count[key] === 1) {
            ans = s.indexOf(key);
            break;
        }
    }
    return ans;
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
							<p>Day 89: Solving one of LeetCode problems</p>
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

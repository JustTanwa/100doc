import React, { useState } from 'react';
import Highlight from 'react-highlight';
import { Container, Row, Col, Button } from 'react-bootstrap';

export default function Day73() {
	const [toggleAnswer, setToggleAnswer] = useState(false);

	const showAnswer = () => {
		setToggleAnswer(!toggleAnswer);
	};

	const leetCode = {
		name: '38. Count and Say',
		question: `<div><p>The <strong>count-and-say</strong> sequence is a sequence of digit strings defined by the recursive formula:</p>
		
		<p>To determine how you "say" a digit string, split it into the <strong>minimal</strong> number of substrings such that each substring contains exactly <strong>one</strong> unique digit. Then for each substring, say the number of digits, then say the digit. Finally, concatenate every said digit.</p>
		
		<p>For example, the saying and conversion for digit string <code>"3322251"</code>:</p>
		<img alt="" src="https://assets.leetcode.com/uploads/2020/10/23/countandsay.jpg" style="width: 581px; height: 172px;">
		<p>Given a positive integer <code>n</code>, return <em>the </em><code>n<sup>th</sup></code><em> term of the <strong>count-and-say</strong> sequence</em>.</p>
		
		<p>&nbsp;</p>
		<p><strong>Example 1:</strong></p>
		
		<pre><strong>Input:</strong> n = 1
<strong>Output:</strong> "1"
<strong>Explanation:</strong> This is the base case.
		</pre>
		
		<p><strong>Example 2:</strong></p>
		
		<pre><strong>Input:</strong> n = 4
<strong>Output:</strong> "1211"
<strong>Explanation:</strong>
countAndSay(1) = "1"
countAndSay(2) = say "1" = one 1 = "11"
countAndSay(3) = say "11" = two 1's = "21"
countAndSay(4) = say "21" = one 2 + one 1 = "12" + "11" = "1211"
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
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
	// helper function 
    const nextSaySequence = (numStr) => {
        const group = [];
        let indexStart = 0;
        for (let i = 1; i <= numStr.length; i++) {
            if (numStr[i - 1] !== numStr[i]) {
                group.push(numStr.slice(indexStart, i))
                indexStart = i;
            }
        }
        
        return group.reduce((str, g) => str += g.length + g[0],"");
    }
    
    let answer = "1";
    for (let i = 1; i < n; i++) {
        answer = nextSaySequence(answer);
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
							<p>Day 73: Solving one of LeetCode problems</p>
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

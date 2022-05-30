import React, { useState } from 'react';
import Highlight from 'react-highlight';
import { Container, Row, Col, Button } from 'react-bootstrap';

export default function Day68() {
	const [toggleAnswer, setToggleAnswer] = useState(false);

	const showAnswer = () => {
		setToggleAnswer(!toggleAnswer);
	};

	const leetCode = {
		name: '171. Excel Sheet Column Number',
		question: `<div><p>Given a string <code>columnTitle</code> that represents the column title as appears in an Excel sheet, return <em>its corresponding column number</em>.</p>

		<p>For example:</p>
		
		<pre>A -&gt; 1
B -&gt; 2
C -&gt; 3
...
Z -&gt; 26
AA -&gt; 27
AB -&gt; 28 
...
		</pre>
		
		<p>&nbsp;</p>
		<p><strong>Example 1:</strong></p>
		
		<pre><strong>Input:</strong> columnTitle = "A"
<strong>Output:</strong> 1
		</pre>
		
		<p><strong>Example 2:</strong></p>
		
		<pre><strong>Input:</strong> columnTitle = "AB"
<strong>Output:</strong> 28
		</pre>
		
		<p><strong>Example 3:</strong></p>
		
		<pre><strong>Input:</strong> columnTitle = "ZY"
<strong>Output:</strong> 701
		</pre>
		
		<p>&nbsp;</
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
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function(columnTitle) {
    let res = 0;
    for (let i = columnTitle.length - 1, j = 0; i >= 0; i--, j++) {
        res += (columnTitle[i].charCodeAt() - 64) * Math.pow(26, j);
    }
    return res;
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
							<p>Day 68: Solving one of LeetCode problems</p>
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

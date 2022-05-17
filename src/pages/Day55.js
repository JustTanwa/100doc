import React, { useState } from 'react';
import Highlight from 'react-highlight';
import { Container, Row, Col, Button } from 'react-bootstrap';

export default function Day55() {
	const [toggleAnswer, setToggleAnswer] = useState(false);

	const showAnswer = () => {
		setToggleAnswer(!toggleAnswer);
	};

	const leetCode = {
		name: '118. Pascal\'s Triangle',
		question: `<div><p>Given an integer <code>numRows</code>, return the first numRows of <strong>Pascal's triangle</strong>.</p>

		<p>In <strong>Pascal's triangle</strong>, each number is the sum of the two numbers directly above it as shown:</p>
		<img alt="" src="https://upload.wikimedia.org/wikipedia/commons/0/0d/PascalTriangleAnimated2.gif" style="height:240px; width:260px">
		<p>&nbsp;</p>
		<p><strong>Example 1:</strong></p>
		<pre><strong>Input:</strong> numRows = 5
<strong>Output:</strong> [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
		</pre><p><strong>Example 2:</strong></p>
		<pre><strong>Input:</strong> numRows = 1
<strong>Output:</strong> [[1]]
		</pre>
		<p>&nbsp;</p>
		<p><strong>Constraints:</strong></p>
		
		<ul>
			<li><code>1 &lt;= numRows &lt;= 30</code></li>
		</ul>
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
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let pascalTri = [];
    
    for (let i = 0; i < numRows; i++) {
        pascalTri[i] = [];
        pascalTri[i][0] = 1;
        pascalTri[i][i] = 1;
        
        for (let j = 1; j < i; j++) {
            pascalTri[i][j] = pascalTri[i - 1][j] + pascalTri[i - 1][j - 1];
        }
    }
    
    return pascalTri;
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
							<p>Day 55: Solving one of LeetCode problems</p>
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

import React, { useState } from 'react';
import Highlight from 'react-highlight';
import { Container, Row, Col, Button } from 'react-bootstrap';

export default function Day19() {
	const [toggleAnswer, setToggleAnswer] = useState(false);

	const showAnswer = () => {
		setToggleAnswer(!toggleAnswer);
	};

	const leetCode = {
		name: '542. 01 Matrix',
		question: `<div><p>Given an <code>m x n</code> binary matrix <code>mat</code>, return <em>the distance of the nearest </em><code>0</code><em> for each cell</em>.</p>

        <p>The distance between two adjacent cells is <code>1</code>.</p>
        
        <p>&nbsp;</p>
        <p><strong>Example 1:</strong></p>
        <img alt="" src="https://assets.leetcode.com/uploads/2021/04/24/01-1-grid.jpg" style="width: 253px; height: 253px;">
        <pre><strong>Input:</strong> mat = [[0,0,0],[0,1,0],[0,0,0]]
<strong>Output:</strong> [[0,0,0],[0,1,0],[0,0,0]]
        </pre>
        
        <p><strong>Example 2:</strong></p>
        <img alt="" src="https://assets.leetcode.com/uploads/2021/04/24/01-2-grid.jpg" style="width: 253px; height: 253px;">
        <pre><strong>Input:</strong> mat = [[0,0,0],[0,1,0],[1,1,1]]
<strong>Output:</strong> [[0,0,0],[0,1,0],[1,2,1]]
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
 * @param {number[][]} mat
 * @return {number[][]}
 **/
var updateMatrix = function(mat) {
    
    const maxDistance = mat.length - 1 + mat[0].length - 1;
    // dynamic programming method
    // top to bottom, comparing above and left cells
    for (let i = 0; i < mat.length; i ++) {
        for (let j = 0; j < mat[0].length; j++) {
            if (mat[i][j] !== 0){
                let cellAbove = i - 1 < 0 ? maxDistance: mat[i - 1][j];
                let cellLeft = j - 1 < 0 ? maxDistance: mat[i][j - 1];
                // update cell
                mat[i][j] = Math.min(cellAbove, cellLeft) + 1; 
            }
        }
    }
    
    // bottom to top, comparing right and below cells
    for (let i = mat.length - 1; i >= 0; i--) {
        for (let j = mat[0].length - 1; j >= 0; j--) {
            if (mat[i][j] !== 0) {
                let cellBelow = i + 1 >= mat.length ? maxDistance : mat[i + 1][j];
                let cellRight = j + 1 >= mat[0].length ? maxDistance : mat[i][j + 1];
                // update cell and compare with old value
                mat[i][j] = Math.min(cellBelow + 1, cellRight + 1, mat[i][j]);
            }
        }
    }
    return mat;
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
							<p>Day 19: Solving one of LeetCode problems</p>
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

import React, { useState } from 'react';
import Highlight from 'react-highlight';
import { Container, Row, Col, Button } from 'react-bootstrap';

export default function Day58() {
	const [toggleAnswer, setToggleAnswer] = useState(false);

	const showAnswer = () => {
		setToggleAnswer(!toggleAnswer);
	};

	const leetCode = {
		name: '63. Unique Paths II',
		question: `<div><p>You are given an <code>m x n</code> integer array <code>grid</code>. There is a robot initially located at the <b>top-left corner</b> (i.e., <code>grid[0][0]</code>). The robot tries to move to the <strong>bottom-right corner</strong> (i.e., <code>grid[m-1][n-1]</code>). The robot can only move either down or right at any point in time.</p>

		<p>An obstacle and space are marked as <code>1</code> or <code>0</code> respectively in <code>grid</code>. A path that the robot takes cannot include <strong>any</strong> square that is an obstacle.</p>
		
		<p>Return <em>the number of possible unique paths that the robot can take to reach the bottom-right corner</em>.</p>
		
		<p>The testcases are generated so that the answer will be less than or equal to <code>2 * 10<sup>9</sup></code>.</p>
		
		<p>&nbsp;</p>
		<p><strong>Example 1:</strong></p>
		<img alt="" src="https://assets.leetcode.com/uploads/2020/11/04/robot1.jpg" style="width: 242px; height: 242px;">
		<pre><strong>Input:</strong> obstacleGrid = [[0,0,0],[0,1,0],[0,0,0]]
<strong>Output:</strong> 2
<strong>Explanation:</strong> There is one obstacle in the middle of the 3x3 grid above.
There are two ways to reach the bottom-right corner:
1. Right -&gt; Right -&gt; Down -&gt; Down
2. Down -&gt; Down -&gt; Right -&gt; Right
		</pre>
		
		<p><strong>Example 2:</strong></p>
		<img alt="" src="https://assets.leetcode.com/uploads/2020/11/04/robot2.jpg" style="width: 162px; height: 162px;">
		<pre><strong>Input:</strong> obstacleGrid = [[0,1],[0,0]]
<strong>Output:</strong> 1
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
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    let n = obstacleGrid[0].length;
    let m = obstacleGrid.length;
    // edge case 
    if(obstacleGrid[0][0] === 1) return 0;
    
    const dpGrid = Array.from(Array(m), () => []);
    let obstacleSeen = false;
    // fill top row boundary
    for (let c = 0; c < n; c++) {
        if (obstacleSeen || obstacleGrid[0][c] === 1) {
            obstacleSeen = true;
            dpGrid[0][c] = 0;
        } else {
            dpGrid[0][c] = 1;
        }
    }
    
    obstacleSeen = false;
    // fill left column boundary
    for (let r = 0; r < m; r++) {
        if (obstacleSeen || obstacleGrid[r][0] === 1) {
            obstacleSeen = true;
            dpGrid[r][0] = 0;
        } else {
            dpGrid[r][0] = 1;
        }
    }
    
    // fill all the other cells 
    for (let i = 1; i < m; i++) {
        for(let j = 1; j < n; j++) {
            if (obstacleGrid[i][j] === 1) {
                dpGrid[i][j] = 0;
            } else {
                dpGrid[i][j] = dpGrid[i-1][j] + dpGrid[i][j-1];
            }
        }
    }
    
    return dpGrid[m-1][n-1];
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
							<p>Day 58: Solving one of LeetCode problems</p>
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

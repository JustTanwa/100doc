import React, { useState } from 'react';
import Highlight from 'react-highlight';
import { Container, Row, Col, Button } from 'react-bootstrap';

export default function Day20() {
	const [toggleAnswer, setToggleAnswer] = useState(false);

	const showAnswer = () => {
		setToggleAnswer(!toggleAnswer);
	};

	const leetCode = {
		name: '994. Rotting Oranges',
		question: `<div><p>You are given an <code>m x n</code> <code>grid</code> where each cell can have one of three values:</p>

        <ul>
            <li><code>0</code> representing an empty cell,</li>
            <li><code>1</code> representing a fresh orange, or</li>
            <li><code>2</code> representing a rotten orange.</li>
        </ul>
        
        <p>Every minute, any fresh orange that is <strong>4-directionally adjacent</strong> to a rotten orange becomes rotten.</p>
        
        <p>Return <em>the minimum number of minutes that must elapse until no cell has a fresh orange</em>. If <em>this is impossible, return</em> <code>-1</code>.</p>
        
        <p>&nbsp;</p>
        <p><strong>Example 1:</strong></p>
        <img alt="" src="https://assets.leetcode.com/uploads/2019/02/16/oranges.png" style="width: 650px; height: 137px;">
        <pre><strong>Input:</strong> grid = [[2,1,1],[1,1,0],[0,1,1]]
<strong>Output:</strong> 4
        </pre>
        
        <p><strong>Example 2:</strong></p>
        
        <pre><strong>Input:</strong> grid = [[2,1,1],[0,1,1],[1,0,1]]
<strong>Output:</strong> -1
<strong>Explanation:</strong> The orange in the bottom left corner (row 2, column 0) is never rotten, because rotting only happens 4-directionally.
        </pre>
        
        <p><strong>Example 3:</strong></p>
        
        <pre><strong>Input:</strong> grid = [[0,2]]
<strong>Output:</strong> 0
<strong>Explanation:</strong> Since there are already no fresh oranges at minute 0, the answer is just 0.
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
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    const rows = grid.length;
    const cols = grid[0].length;
    let minutes = 0;
    let freshOrange = 0;
    const q = [];
    
    // transverse the grid, noting all fresh & rotten oranges
    for (let i = 0; i < rows; i ++) {
        for (let j = 0; j < cols; j++) {
            if (grid[i][j] === 1) {
                freshOrange += 1;
            }
            else if (grid[i][j] === 2) {
                q.push([i,j])
            }
        }
    }
    // begin BFS
    while (q.length !== 0 && freshOrange > 0) {
        let cellInQ = q.length;
        // deque each rotten and turn neighbour to rotten
        for (let cell = 0; cell < cellInQ; cell++ ) {
            let [row, col] = q.shift();
            
            let neighbours = [
                            [row, col + 1],
                            [row, col - 1],
                            [row + 1, col],
                            [row - 1, col]
                         ];
            
            for (let n of neighbours) {
                // if cell is outside of the matrix or is not fresh
                if (n[0] < 0 || n[0] >= rows || 
                    n[1] >= cols || n[1] < 0 ||
                grid[n[0]][n[1]] !== 1) continue;
                grid[n[0]][n[1]] = 2;
                // add new rotten oranges to queue
                q.push([n[0], n[1]]);
                freshOrange -= 1;
            }
        }
        // increase time after all rotten has infected the fresh
        minutes += 1;
    }
    
    // if still some fresh left then return impossible
    return freshOrange === 0 ? minutes : -1;
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
							<p>Day 20: Solving one of LeetCode problems</p>
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

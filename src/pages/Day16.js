import React, { useState } from 'react';
import Highlight from 'react-highlight';
import { Container, Row, Col, Button } from 'react-bootstrap';

export default function Day16() {
	const [toggleAnswer, setToggleAnswer] = useState(false);

	const showAnswer = () => {
		setToggleAnswer(!toggleAnswer);
	};

	const leetCode = {
		name: '695. Max Area of Island',
		question: `<div><p>You are given an <code>m x n</code> binary matrix <code>grid</code>. An island is a group of <code>1</code>'s (representing land) connected <strong>4-directionally</strong> (horizontal or vertical.) You may assume all four edges of the grid are surrounded by water.</p>

        <p>The <strong>area</strong> of an island is the number of cells with a value <code>1</code> in the island.</p>
        
        <p>Return <em>the maximum <strong>area</strong> of an island in </em><code>grid</code>. If there is no island, return <code>0</code>.</p>
        
        <p>&nbsp;</p>
        <p><strong>Example 1:</strong></p>
        <img alt="" src="https://assets.leetcode.com/uploads/2021/05/01/maxarea1-grid.jpg" style="width: 500px; height: 310px;">
        <pre><strong>Input:</strong> grid = [[0,0,1,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,1,1,0,1,0,0,0,0,0,0,0,0],[0,1,0,0,1,1,0,0,1,0,1,0,0],[0,1,0,0,1,1,0,0,1,1,1,0,0],[0,0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,0,0,0,0,0,0,1,1,0,0,0,0]]
        <strong>Output:</strong> 6
        <strong>Explanation:</strong> The answer is not 11, because the island must be connected 4-directionally.
        </pre>
        
        <p><strong>Example 2:</strong></p>
        
        <pre><strong>Input:</strong> grid = [[0,0,0,0,0,0,0,0]]
        <strong>Output:</strong> 0
        </pre>
        
        <p>&nbsp;</p>
        <p><strong>Constraints:</strong></p>
        
        <ul>
            <li><code>m == grid.length</code></li>
            <li><code>n == grid[i].length</code></li>
            <li><code>1 &lt;= m, n &lt;= 50</code></li>
            <li><code>grid[i][j]</code> is either <code>0</code> or <code>1</code>.</li>
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
								{`/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    let rows = grid.length;
    let columns = grid[0].length;
    let visit = new Set();
    
    function dfs(r, c) {
        if (r < 0 || r >= rows || c < 0 || c >= columns || grid[r][c] === 0 || visit.has(\`\${r},\${c}\`)) return 0;
        
        visit.add(\`\${r},\${c}\`);
        
        let area = (1 + dfs(r + 1, c) + dfs(r - 1, c) + dfs(r, c + 1) + dfs(r, c - 1));
        
        return area;
    }
    let maxArea = 0;
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {
            maxArea = Math.max(maxArea, dfs(i,j));
        }
    }
    return maxArea;
    
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
								Day 16: Solving one of LeetCode problems
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

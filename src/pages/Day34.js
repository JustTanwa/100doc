import React, { useState } from 'react';
import Highlight from 'react-highlight';
import { Container, Row, Col, Button } from 'react-bootstrap';

export default function Day34() {
	const [toggleAnswer, setToggleAnswer] = useState(false);

	const showAnswer = () => {
		setToggleAnswer(!toggleAnswer);
	};

	const leetCode = {
		name: '130. Surrounded Regions',
		question: `<div><p>Given an <code>m x n</code> matrix <code>board</code> containing <code>'X'</code> and <code>'O'</code>, <em>capture all regions that are 4-directionally&nbsp;surrounded by</em> <code>'X'</code>.</p>

        <p>A region is <strong>captured</strong> by flipping all <code>'O'</code>s into <code>'X'</code>s in that surrounded region.</p>
        
        <p>&nbsp;</p>
        <p><strong>Example 1:</strong></p>
        <img alt="" src="https://assets.leetcode.com/uploads/2021/02/19/xogrid.jpg" style="width: 550px; height: 237px;">
        <pre><strong>Input:</strong> board = [["X","X","X","X"],["X","O","O","X"],["X","X","O","X"],["X","O","X","X"]]
<strong>Output:</strong> [["X","X","X","X"],["X","X","X","X"],["X","X","X","X"],["X","O","X","X"]]
<strong>Explanation:</strong> Surrounded regions should not be on the border, which means that any 'O' on the border of the board are not flipped to 'X'. Any 'O' that is not on the border and it is not connected to an 'O' on the border will be flipped to 'X'. Two cells are connected if they are adjacent cells connected horizontally or vertically.
        </pre>
        
        <p><strong>Example 2:</strong></p>
        
        <pre><strong>Input:</strong> board = [["X"]]
<strong>Output:</strong> [["X"]]
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
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
    if (!board) return board;
    
    let m = board.length; // rows
    let n = board[0].length; // columns
    
    let q = []
    
    // mark "O" around border
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if ((i === 0 || i === m - 1 ||
                j === 0 || j === n - 1) && board[i][j] === "O") {
                q.push([i,j]);
            }
        }
    }
    
    // run BFS to find connected "O" to border "O"
    while (q.length !== 0) {
        let [r, c] = q.shift();
        let directions = [[0,1], [0,-1], [1,0], [-1,0]];
        directions.forEach(([dx, dy]) => {
            if (r + dx > m - 1 || r + dx < 0 || c + dy > n - 1 || c + dy < 0 || board[r + dx][c + dy] !== "O") return;
            q.push([r + dx, c + dy])
            
        });
        board[r][c] = "#";
        
    }
    
    // flip the remaining O which aren't connected
     for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (board[i][j] === "O") board[i][j] = "X";
            if (board[i][j] === "#") board[i][j] = "O";
        }
    }
    
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
							<p>Day 34: Solving one of LeetCode problems</p>
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

import React, { useState } from 'react';
import Highlight from 'react-highlight';
import { Container, Row, Col, Button } from 'react-bootstrap';

export default function Day36() {
	const [toggleAnswer, setToggleAnswer] = useState(false);

	const showAnswer = () => {
		setToggleAnswer(!toggleAnswer);
	};

	const leetCode = {
		name: '36. Valid Sudoku',
		question: `<div><p>Determine if a&nbsp;<code>9 x 9</code> Sudoku board&nbsp;is valid.&nbsp;Only the filled cells need to be validated&nbsp;<strong>according to the following rules</strong>:</p>

		<ol>
			<li>Each row&nbsp;must contain the&nbsp;digits&nbsp;<code>1-9</code> without repetition.</li>
			<li>Each column must contain the digits&nbsp;<code>1-9</code>&nbsp;without repetition.</li>
			<li>Each of the nine&nbsp;<code>3 x 3</code> sub-boxes of the grid must contain the digits&nbsp;<code>1-9</code>&nbsp;without repetition.</li>
		</ol>
		
		<p><strong>Note:</strong></p>
		
		<ul>
			<li>A Sudoku board (partially filled) could be valid but is not necessarily solvable.</li>
			<li>Only the filled cells need to be validated according to the mentioned&nbsp;rules.</li>
		</ul>
		
		<p>&nbsp;</p>
		<p><strong>Example 1:</strong></p>
		<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Sudoku-by-L2G-20050714.svg/250px-Sudoku-by-L2G-20050714.svg.png" style="height:250px; width:250px">
		<pre><strong>Input:</strong> board = 
		[["5","3",".",".","7",".",".",".","."]
		,["6",".",".","1","9","5",".",".","."]
		,[".","9","8",".",".",".",".","6","."]
		,["8",".",".",".","6",".",".",".","3"]
		,["4",".",".","8",".","3",".",".","1"]
		,["7",".",".",".","2",".",".",".","6"]
		,[".","6",".",".",".",".","2","8","."]
		,[".",".",".","4","1","9",".",".","5"]
		,[".",".",".",".","8",".",".","7","9"]]
<strong>Output:</strong> true
		</pre>
		
		<p><strong>Example 2:</strong></p>
		
		<pre><strong>Input:</strong> board = 
		[["8","3",".",".","7",".",".",".","."]
		,["6",".",".","1","9","5",".",".","."]
		,[".","9","8",".",".",".",".","6","."]
		,["8",".",".",".","6",".",".",".","3"]
		,["4",".",".","8",".","3",".",".","1"]
		,["7",".",".",".","2",".",".",".","6"]
		,[".","6",".",".",".",".","2","8","."]
		,[".",".",".","4","1","9",".",".","5"]
		,[".",".",".",".","8",".",".","7","9"]]
<strong>Output:</strong> false
<strong>Explanation:</strong> Same as Example 1, except with the <strong>5</strong> in the top left corner being modified to <strong>8</strong>. Since there are two 8's in the top left 3x3 sub-box, it is invalid.
		</pre>
		
		<p>&nbsp;</p>
		</div>`,
		level: 'Meidum',
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
 * @return {boolean}
 */
var isValidSudoku = function(board) {
	//base case
    if (!board) return false;
    // helper function for verifying subBox
    const isValidSubBox = coord => {
        let [r,c] = coord;
        let box = new Set();
        let isValid = true;
        
        let direction = [[-1,-1],[-1,0],[-1,1],
                        [0,-1],[0,0],[0,1],
                        [1,-1],[1,0],[1,1]];
        direction.forEach(([dy, dx]) => {
            if (board[r + dy][c + dx] !== ".") {
                if (box.has(board[r + dy][c + dx])) {
                    isValid = false;
                };
                box.add(board[r + dy][c + dx]);
            }
        });
        return isValid;
    }
    
    rows: for (let i = 0; i < 9; i++) {
		// explore rows and columns
        let row = new Set();
        let column = new Set();
        columns: for (let j = 0; j < 9; j++) {
            let r = board[i][j];
            let c = board[j][i];
            // check for sub box when in the center of each sub box
            if ((i === 1 && (j === 1 ||j === 4 ||j === 7)) ||
               (i === 4 && (j === 1 ||j === 4 ||j === 7)) ||
               (i === 7 && (j === 1 ||j === 4 ||j === 7))) {
                if (!isValidSubBox([i,j])) return false;
            }
            
            if (r !== ".") {
                if (row.has(r)) return false;
                row.add(r);
            } 
            if (c !== ".") {
                if (column.has(c)) return false;
                column.add(c);
            }
            
        }
    }
    
    return true;
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
							<p>Day 36: Solving one of LeetCode problems</p>
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

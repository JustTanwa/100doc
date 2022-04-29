import React, { useState } from 'react';
import Highlight from 'react-highlight';
import { Container, Row, Col, Button } from 'react-bootstrap';

export default function Day25() {
	const [toggleAnswer, setToggleAnswer] = useState(false);

	const showAnswer = () => {
		setToggleAnswer(!toggleAnswer);
	};

	const leetCode = {
		name: '101. Symmetric Tree',
		question: `<div><p>Given the <code>root</code> of a binary tree, <em>check whether it is a mirror of itself</em> (i.e., symmetric around its center).</p>

        <p>&nbsp;</p>
        <p><strong>Example 1:</strong></p>
        <img alt="" src="https://assets.leetcode.com/uploads/2021/02/19/symtree1.jpg" style="width: 354px; height: 291px;">
        <pre><strong>Input:</strong> root = [1,2,2,3,4,4,3]
<strong>Output:</strong> true
        </pre>
        
        <p><strong>Example 2:</strong></p>
        <img alt="" src="https://assets.leetcode.com/uploads/2021/02/19/symtree2.jpg" style="width: 308px; height: 258px;">
        <pre><strong>Input:</strong> root = [1,2,2,null,3,null,3]
<strong>Output:</strong> false
        </pre>
        
        <p>&nbsp;</p></div>`,
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
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    if (!root) return true;
    
    function isMirror(left, right) {
        // check both null
        if (!left && !right) return true;
        
        if (!left || !right || left.val !== right.val) return false;
        
        return isMirror(left.left, right.right) && isMirror(left.right, right.left);
    }
    
    return isMirror(root.left, root.right)
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
							<p>Day 25: Solving one of LeetCode problems</p>
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

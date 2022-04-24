import React, { useState } from 'react';
import Highlight from 'react-highlight';
import { Container, Row, Col, Button } from 'react-bootstrap';

export default function Day32() {
	const [toggleAnswer, setToggleAnswer] = useState(false);

	const showAnswer = () => {
		setToggleAnswer(!toggleAnswer);
	};

	const leetCode = {
		name: '111. Minimum Depth of Binary Tree',
		question: `<div><p>Given a binary tree, find its minimum depth.</p>

        <p>The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.</p>
        
        <p><strong>Note:</strong>&nbsp;A leaf is a node with no children.</p>
        
        <p>&nbsp;</p>
        <p><strong>Example 1:</strong></p>
        <img alt="" src="https://assets.leetcode.com/uploads/2020/10/12/ex_depth.jpg" style="width: 432px; height: 302px;">
        <pre><strong>Input:</strong> root = [3,9,20,null,null,15,7]
<strong>Output:</strong> 2
        </pre>
        
        <p><strong>Example 2:</strong></p>
        
        <pre><strong>Input:</strong> root = [2,null,3,null,4,null,5,null,6]
<strong>Output:</strong> 5
        </pre>
        
        <p>&nbsp;</p>
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
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function(root) {
    // base case
    if (!root) return 0;
    let q = [];
    q.push(root);
    let depth = 1;
    // approach using BFS
    while (q.length !==0) {
        let level = q.length;
        for (let i = 0; i < level; i++) {
            let curNode = q.shift();
            // leaf
            if (!curNode.left && !curNode.right) return depth;
            if (curNode.left) {
                q.push(curNode.left);
            }
            if (curNode.right) {
                q.push(curNode.right);
            }
        }
        depth++;
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
							<p>Day 32: Solving one of LeetCode problems</p>
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

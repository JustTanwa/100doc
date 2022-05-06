import React, { useState } from 'react';
import Highlight from 'react-highlight';
import { Container, Row, Col, Button } from 'react-bootstrap';

export default function Day44() {
	const [toggleAnswer, setToggleAnswer] = useState(false);

	const showAnswer = () => {
		setToggleAnswer(!toggleAnswer);
	};

	const leetCode = {
		name: '133. Clone Graph',
		question: `<div><p>Given a reference of a node in a <strong><a href="https://en.wikipedia.org/wiki/Connectivity_(graph_theory)#Connected_graph" target="_blank">connected</a></strong> undirected graph.</p>

		<p>Return a <a href="https://en.wikipedia.org/wiki/Object_copying#Deep_copy" target="_blank"><strong>deep copy</strong></a> (clone) of the graph.</p>
		
		<p>Each node in the graph contains a value (<code>int</code>) and a list (<code>List[Node]</code>) of its neighbors.</p>
		
		<pre>class Node {
			public int val;
			public List&lt;Node&gt; neighbors;
		}
		</pre>
		
		<p>&nbsp;</p>
		
		<p><strong>Test case format:</strong></p>
		
		<p>For simplicity, each node's value is the same as the node's index (1-indexed). For example, the first node with <code>val == 1</code>, the second node with <code>val == 2</code>, and so on. The graph is represented in the test case using an adjacency list.</p>
		
		<p><b>An adjacency list</b> is a collection of unordered <b>lists</b> used to represent a finite graph. Each list describes the set of neighbors of a node in the graph.</p>
		
		<p>The given node will always be the first node with <code>val = 1</code>. You must return the <strong>copy of the given node</strong> as a reference to the cloned graph.</p>
		
		<p>&nbsp;</p>
		<p><strong>Example 1:</strong></p>
		<img alt="" src="https://assets.leetcode.com/uploads/2019/11/04/133_clone_graph_question.png" style="width: 454px; height: 500px;">
		<pre><strong>Input:</strong> adjList = [[2,4],[1,3],[2,4],[1,3]]
<strong>Output:</strong> [[2,4],[1,3],[2,4],[1,3]]
<strong>Explanation:</strong> There are 4 nodes in the graph.
1st node (val = 1)'s neighbors are 2nd node (val = 2) and 4th node (val = 4).
2nd node (val = 2)'s neighbors are 1st node (val = 1) and 3rd node (val = 3).
3rd node (val = 3)'s neighbors are 2nd node (val = 2) and 4th node (val = 4).
4th node (val = 4)'s neighbors are 1st node (val = 1) and 3rd node (val = 3).
		</pre>
		
		<p><strong>Example 2:</strong></p>
		<img alt="" src="https://assets.leetcode.com/uploads/2020/01/07/graph.png" style="width: 163px; height: 148px;">
		<pre><strong>Input:</strong> adjList = [[]]
<strong>Output:</strong> [[]]
<strong>Explanation:</strong> Note that the input contains one empty list. The graph consists of only one node with val = 1 and it does not have any neighbors.
		</pre>
		
		<p><strong>Example 3:</strong></p>
		
		<pre><strong>Input:</strong> adjList = []
<strong>Output:</strong> []
<strong>Explanation:</strong> This an empty graph, it does not have any nodes.
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
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function(node) {
    // simple case 
    if (!node) return node;
    
    // inital queue and visited map
    let q = [node];
    let visited = new Map();
    visited.set(node.val, new Node(node.val));
    
	// begin BFS
    while (q.length > 0) {
        let curNode = q.shift();

        for (let n of curNode.neighbors) {
            if (!visited.has(n.val)) {
                visited.set(n.val, new Node(n.val));
                q.push(n);
            }
			// update the neighbors
            visited.get(curNode.val).neighbors.push(visited.get(n.val));
        }
    }
    return visited.get(node.val);
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
							<p>Day 44: Solving one of LeetCode problems</p>
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

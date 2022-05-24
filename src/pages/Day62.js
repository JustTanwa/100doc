import React, { useState } from 'react';
import Highlight from 'react-highlight';
import { Container, Row, Col, Button } from 'react-bootstrap';

export default function Day62() {
	const [toggleAnswer, setToggleAnswer] = useState(false);

	const showAnswer = () => {
		setToggleAnswer(!toggleAnswer);
	};

	const leetCode = {
		name: '155. Min Stack',
		question: `<div><p>Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.</p>

        <p>Implement the <code>MinStack</code> class:</p>
        
        <ul>
            <li><code>MinStack()</code> initializes the stack object.</li>
            <li><code>void push(int val)</code> pushes the element <code>val</code> onto the stack.</li>
            <li><code>void pop()</code> removes the element on the top of the stack.</li>
            <li><code>int top()</code> gets the top element of the stack.</li>
            <li><code>int getMin()</code> retrieves the minimum element in the stack.</li>
        </ul>
        
        <p>&nbsp;</p>
        <p><strong>Example 1:</strong></p>
        
        <pre><strong>Input</strong>
["MinStack","push","push","push","getMin","pop","top","getMin"]
[[],[-2],[0],[-3],[],[],[],[]]

<strong>Output</strong>
[null,null,null,null,-3,null,0,-2]

<strong>Explanation</strong>
MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
 minStack.push(-3);
minStack.getMin(); // return -3
minStack.pop();
minStack.top();    // return 0
minStack.getMin(); // return -2
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
								{`
var MinStack = function() {
    this.stack = [];
    this.min = null;
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    this.stack[this.stack.length] = val;
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.stack.length--;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return Math.min(...this.stack)
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */`}
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
							<p>Day 62: Solving one of LeetCode problems</p>
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

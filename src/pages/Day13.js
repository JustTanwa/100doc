import React, { useState } from 'react';
import Highlight from 'react-highlight';
import { Container, Row, Col, Button } from 'react-bootstrap';

export default function Day13() {
	const [toggleAnswer, setToggleAnswer] = useState(false);

	const showAnswer = () => {
		setToggleAnswer(!toggleAnswer);
	};

	const leetCode = {
		name: '19. Remove Nth Node From End of List',
		question: `Given the head of a linked list, remove the nth node from the end of the list and return its head.
        <br>
        <strong>Example 1:</strong>
        <br>
        <div>
            <img src="https://assets.leetcode.com/uploads/2020/10/03/remove_ex1.jpg" />
        </div>
        <br>
        Input: head = [1,2,3,4,5], n = 2
        <br>
Output: [1,2,3,5]`,
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
								{`var removeNthFromEnd = function(head, n) {
    let nodes = [];
    let current = head;
    let length = 0;
    while(current !== null) {
        nodes.push(current);
        current = current.next;
        length++;
    }
    if (length === 1) return null;
    let position = length - n;
    if (position === 0) {
        return nodes[1];
    } else if (position === length - 1) {
        nodes[length - 2].next = null
    } else {
        nodes[position - 1].next = nodes[position + 1]
    }
    return nodes[0]
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
								Day 13: Solving one of LeetCode problems
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

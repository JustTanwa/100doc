import React, { useState } from 'react';
import Highlight from 'react-highlight';
import { Container, Row, Col, Button } from 'react-bootstrap';

export default function Day23() {
	const [toggleAnswer, setToggleAnswer] = useState(false);

	const showAnswer = () => {
		setToggleAnswer(!toggleAnswer);
	};

	const leetCode = {
		name: '234. Palindrome Linked List',
		question: `<div><p>Given the <code>head</code> of a singly linked list, return <code>true</code> if it is a palindrome.</p>

        <p>&nbsp;</p>
        <p><strong>Example 1:</strong></p>
        <img alt="" src="https://assets.leetcode.com/uploads/2021/03/03/pal1linked-list.jpg" style="width: 422px; height: 62px;">
        <pre><strong>Input:</strong> head = [1,2,2,1]
<strong>Output:</strong> true
        </pre>
        
        <p><strong>Example 2:</strong></p>
        <img alt="" src="https://assets.leetcode.com/uploads/2021/03/03/pal2linked-list.jpg" style="width: 182px; height: 62px;">
        <pre><strong>Input:</strong> head = [1,2]
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
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    
    function reverse(head) {
        let tail = null;
        let current = head;
        
        while(current) {
            let next = current.next
            current.next = tail;
            tail = current;
            current = next;
        }
        return tail;
    }
    
    // using fast and slow pointer to find middle
    let fastP = head;
    let slowP = head;
    
    while(fastP.next && fastP.next.next) {
        fastP = fastP.next.next;
        slowP = slowP.next;
    }
    
    // set slow pointer to be the second half
    slowP = slowP.next;
    fastP = head;
    slowP = reverse(slowP);
    
    
    // check for palindrome
    while(slowP) {
        if(slowP.val !== fastP.val) return false;
        slowP = slowP.next;
        fastP = fastP.next;
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
							<p>Day 23: Solving one of LeetCode problems</p>
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

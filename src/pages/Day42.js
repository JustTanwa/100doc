import React, { useState } from 'react';
import Highlight from 'react-highlight';
import { Container, Row, Col, Button } from 'react-bootstrap';

export default function Day42() {
	const [toggleAnswer, setToggleAnswer] = useState(false);

	const showAnswer = () => {
		setToggleAnswer(!toggleAnswer);
	};

	const leetCode = {
		name: '1679. Max Number of K-Sum Pairs',
		question: `<div><p>You are given an integer array <code>nums</code> and an integer <code>k</code>.</p>

		<p>In one operation, you can pick two numbers from the array whose sum equals <code>k</code> and remove them from the array.</p>
		
		<p>Return <em>the maximum number of operations you can perform on the array</em>.</p>
		
		<p>&nbsp;</p>
		<p><strong>Example 1:</strong></p>
		
		<pre><strong>Input:</strong> nums = [1,2,3,4], k = 5
<strong>Output:</strong> 2
<strong>Explanation:</strong> Starting with nums = [1,2,3,4]:
- Remove numbers 1 and 4, then nums = [2,3]
- Remove numbers 2 and 3, then nums = []
There are no more pairs that sum up to 5, hence a total of 2 operations.</pre>
		
		<p><strong>Example 2:</strong></p>
		
		<pre><strong>Input:</strong> nums = [3,1,3,4,3], k = 6
<strong>Output:</strong> 1
<strong>Explanation:</strong> Starting with nums = [3,1,3,4,3]:
- Remove the first two 3's, then nums = [1,4,3]
There are no more pairs that sum up to 6, hence a total of 1 operation.</pre>
		
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
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function(nums, k) {
	// keep track of prev nums
    let remainders = new Map();
    let operations = 0;
    
	// one loop
    for (let i = 0; i < nums.length; i++) {
        let remainder = k - nums[i];
        
		// check if seen the remainder already
        if (remainders.has(remainder)) {
            let amount = remainders.get(remainder)
            if (amount > 0) {
                operations++;
                amount--;
                if (amount <= 0) remainders.delete(remainder);
                else remainders.set(remainder, amount);
            }
        } else {
            if (remainders.has(nums[i])) {
                remainders.set(nums[i], remainders.get(nums[i]) + 1)
            } else {
                remainders.set(nums[i], 1)
            }
        }
        
    }
    return operations;
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
							<p>Day 42: Solving one of LeetCode problems</p>
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

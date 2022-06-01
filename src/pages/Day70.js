import React, { useState } from 'react';
import Highlight from 'react-highlight';
import { Container, Row, Col, Button } from 'react-bootstrap';

export default function Day70() {
	const [toggleAnswer, setToggleAnswer] = useState(false);

	const showAnswer = () => {
		setToggleAnswer(!toggleAnswer);
	};

	const leetCode = {
		name: '220. Contains Duplicate III',
		question: `<div><p>Given an integer array <code>nums</code> and two integers <code>k</code> and <code>t</code>, return <code>true</code> if there are <strong>two distinct indices</strong> <code>i</code> and <code>j</code> in the array such that <code>abs(nums[i] - nums[j]) &lt;= t</code> and <code>abs(i - j) &lt;= k</code>.</p>

		<p>&nbsp;</p>
		<p><strong>Example 1:</strong></p>
		<pre><strong>Input:</strong> nums = [1,2,3,1], k = 3, t = 0
<strong>Output:</strong> true
		</pre><p><strong>Example 2:</strong></p>
		<pre><strong>Input:</strong> nums = [1,0,1,1], k = 1, t = 2
<strong>Output:</strong> true
		</pre><p><strong>Example 3:</strong></p>
		<pre><strong>Input:</strong> nums = [1,5,9,1,5,9], k = 2, t = 3
<strong>Output:</strong> false
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
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
var containsNearbyAlmostDuplicate = function(nums, k, t) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (Math.abs(nums[i] - nums[j]) <= t && j - i <= k) {
                return true
            }
        }
    }
    return false;
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
							<p>Day 70: Solving one of LeetCode problems</p>
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

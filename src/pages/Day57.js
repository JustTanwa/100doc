import React, { useState } from 'react';
import Highlight from 'react-highlight';
import { Container, Row, Col, Button } from 'react-bootstrap';

export default function Day57() {
	const [toggleAnswer, setToggleAnswer] = useState(false);

	const showAnswer = () => {
		setToggleAnswer(!toggleAnswer);
	};

	const leetCode = {
		name: '136. Single Number',
		question: `<div><p>Given a <strong>non-empty</strong>&nbsp;array of integers <code>nums</code>, every element appears <em>twice</em> except for one. Find that single one.</p>

		<p>You must&nbsp;implement a solution with a linear runtime complexity and use&nbsp;only constant&nbsp;extra space.</p>
		
		<p>&nbsp;</p>
		<p><strong>Example 1:</strong></p>
		<pre><strong>Input:</strong> nums = [2,2,1]
<strong>Output:</strong> 1
		</pre><p><strong>Example 2:</strong></p>
		<pre><strong>Input:</strong> nums = [4,1,2,1,2]
<strong>Output:</strong> 4
		</pre><p><strong>Example 3:</strong></p>
		<pre><strong>Input:</strong> nums = [1]
<strong>Output:</strong> 1
		</pre>
		<p>&nbsp;</p>
		<p><strong>Constraints:</strong></p>
		
		<ul>
			<li><code>1 &lt;= nums.length &lt;= 3 * 10<sup>4</sup></code></li>
			<li><code>-3 * 10<sup>4</sup> &lt;= nums[i] &lt;= 3 * 10<sup>4</sup></code></li>
			<li>Each element in the array appears twice except for one element which appears only once.</li>
		</ul>
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
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    const occurance = new Set();
    for (const num of nums) {
        if (!occurance.has(num)) {
            occurance.add(num);
        } else {
            occurance.delete(num);
        }
    }
    return occurance.values().next().value;
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
							<p>Day 57: Solving one of LeetCode problems</p>
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

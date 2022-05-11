import React, { useState } from 'react';
import Highlight from 'react-highlight';
import { Container, Row, Col, Button } from 'react-bootstrap';

export default function Day49() {
	const [toggleAnswer, setToggleAnswer] = useState(false);

	const showAnswer = () => {
		setToggleAnswer(!toggleAnswer);
	};

	const leetCode = {
		name: '26. Remove Duplicates from Sorted Array',
		question: `<div><p>Given an integer array <code>nums</code> sorted in <strong>non-decreasing order</strong>, remove the duplicates <a href="https://en.wikipedia.org/wiki/In-place_algorithm" target="_blank"><strong>in-place</strong></a> such that each unique element appears only <strong>once</strong>. The <strong>relative order</strong> of the elements should be kept the <strong>same</strong>.</p>

		<p>Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the <strong>first part</strong> of the array <code>nums</code>. More formally, if there are <code>k</code> elements after removing the duplicates, then the first <code>k</code> elements of <code>nums</code>&nbsp;should hold the final result. It does not matter what you leave beyond the first&nbsp;<code>k</code>&nbsp;elements.</p>
		
		<p>Return <code>k</code><em> after placing the final result in the first </em><code>k</code><em> slots of </em><code>nums</code>.</p>
		
		<p>Do <strong>not</strong> allocate extra space for another array. You must do this by <strong>modifying the input array <a href="https://en.wikipedia.org/wiki/In-place_algorithm" target="_blank">in-place</a></strong> with O(1) extra memory.</p>
		
		<p>&nbsp;</p>
		<p><strong>Example 1:</strong></p>
		
		<pre><strong>Input:</strong> nums = [1,1,2]
<strong>Output:</strong> 2, nums = [1,2,_]
<strong>Explanation:</strong> Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).
		</pre>
		
		<p><strong>Example 2:</strong></p>
		
		<pre><strong>Input:</strong> nums = [0,0,1,1,1,2,2,3,3,4]
<strong>Output:</strong> 5, nums = [0,1,2,3,4,_,_,_,_,_]
<strong>Explanation:</strong> Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).
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
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
	// simple cases
    let min = k * (k + 1) / 2;
    let max = 45; // sum 1 to 9;
    
    if (n < min || n > max) return [];
    

    let result = [];
    // helper function to backtrack
    const findCombination = (arr, target, index) => {
        if (arr.length === k && target === n) {
            result.push(arr);
            return;
        }
        if (arr.length < k && target < n) {
            for (let i = index; i <= 9; i++) {
                findCombination([...arr, i], target + i, i + 1);
            }
        }
        
    }
    
    findCombination([], 0, 1);
    
    return result;
    
    
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
							<p>Day 49: Solving one of LeetCode problems</p>
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

import React, { useState } from 'react';
import Highlight from 'react-highlight';
import { Container, Row, Col, Button } from 'react-bootstrap';

export default function Day71() {
	const [toggleAnswer, setToggleAnswer] = useState(false);

	const showAnswer = () => {
		setToggleAnswer(!toggleAnswer);
	};

	const leetCode = {
		name: '46. Permutations',
		question: `<div><p>Given an array <code>nums</code> of distinct integers, return <em>all the possible permutations</em>. You can return the answer in <strong>any order</strong>.</p>

		<p>&nbsp;</p>
		<p><strong>Example 1:</strong></p>
		<pre><strong>Input:</strong> nums = [1,2,3]
<strong>Output:</strong> [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
		</pre><p><strong>Example 2:</strong></p>
		<pre><strong>Input:</strong> nums = [0,1]
<strong>Output:</strong> [[0,1],[1,0]]
		</pre><p><strong>Example 3:</strong></p>
		<pre><strong>Input:</strong> nums = [1]
<strong>Output:</strong> [[1]]
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
 * @return {number[][]}
 */
var permute = function(nums) {
    let ans = [];
    
    const permuteNum = (numList, memo = []) => {
        if (numList.length !== 0) {
            for (let i = 0; i < numList.length; i++) {
                let copy = [...numList];
                let curNum = copy.splice(i, 1);
                permuteNum([...copy], memo.concat(curNum));
            }
        } else {
            ans.push(memo);
        }
    }
    permuteNum(nums);
    return ans;
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
							<p>Day 71: Solving one of LeetCode problems</p>
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

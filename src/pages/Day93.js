import React, { useState } from 'react';
import Highlight from 'react-highlight';
import { Container, Row, Col, Button } from 'react-bootstrap';

export default function Day93() {
	const [toggleAnswer, setToggleAnswer] = useState(false);

	const showAnswer = () => {
		setToggleAnswer(!toggleAnswer);
	};

	const leetCode = {
		name: '197. Rising Temperature',
		question: `<div><p>Table: <code>Weather</code></p>

		<pre>+---------------+---------+
		| Column Name   | Type    |
		+---------------+---------+
		| id            | int     |
		| recordDate    | date    |
		| temperature   | int     |
		+---------------+---------+
		id is the primary key for this table.
		This table contains information about the temperature on a certain day.
		</pre>
		
		<p>&nbsp;</p>
		
		<p>Write an SQL query to find all dates' <code>Id</code> with higher temperatures compared to its previous dates (yesterday).</p>
		
		<p>Return the result table in <strong>any order</strong>.</p>
		
		<p>The query result format is in the following example.</p>
		
		<p>&nbsp;</p>
		<p><strong>Example 1:</strong></p>
		
		<pre><strong>Input:</strong> 
		Weather table:
		+----+------------+-------------+
		| id | recordDate | temperature |
		+----+------------+-------------+
		| 1  | 2015-01-01 | 10          |
		| 2  | 2015-01-02 | 25          |
		| 3  | 2015-01-03 | 20          |
		| 4  | 2015-01-04 | 30          |
		+----+------------+-------------+
		<strong>Output:</strong> 
		+----+
		| id |
		+----+
		| 2  |
		| 4  |
		+----+
		<strong>Explanation:</strong> 
		In 2015-01-02, the temperature was higher than the previous day (10 -&gt; 25).
		In 2015-01-04, the temperature was higher than the previous day (20 -&gt; 30).
		</pre>
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
								{`# Write your MySQL query statement below
SELECT w.id as Id
FROM Weather w, Weather w2
WHERE w2.temperature < w.temperature
AND DATEDIFF(w.recordDate, w2.recordDate) = 1;`}
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
							<p>Day 93: Solving one of LeetCode problems</p>
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

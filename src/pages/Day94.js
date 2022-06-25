import React, { useState } from 'react';
import Highlight from 'react-highlight';
import { Container, Row, Col, Button } from 'react-bootstrap';

export default function Day94() {
	const [toggleAnswer, setToggleAnswer] = useState(false);

	const showAnswer = () => {
		setToggleAnswer(!toggleAnswer);
	};

	const leetCode = {
		name: '595. Big Countries',
		question: `<div><p>Table: <code>World</code></p>

		<pre>+-------------+---------+
		| Column Name | Type    |
		+-------------+---------+
		| name        | varchar |
		| continent   | varchar |
		| area        | int     |
		| population  | int     |
		| gdp         | int     |
		+-------------+---------+
		name is the primary key column for this table.
		Each row of this table gives information about the name of a country, the continent to which it belongs, its area, the population, and its GDP value.
		</pre>
		
		<p>&nbsp;</p>
		
		<p>A country is <strong>big</strong> if:</p>
		
		<ul>
			<li>it has an area of at least&nbsp;three million (i.e., <code>3000000 km<sup>2</sup></code>), or</li>
			<li>it has a population of at least&nbsp;twenty-five million (i.e., <code>25000000</code>).</li>
		</ul>
		
		<p>Write an SQL query to report the name, population, and area of the <strong>big countries</strong>.</p>
		
		<p>Return the result table in <strong>any order</strong>.</p>
		
		<p>The query result format is in the following example.</p>
		
		<p>&nbsp;</p>
		<p><strong>Example 1:</strong></p>
		
		<pre><strong>Input:</strong> 
		World table:
		+-------------+-----------+---------+------------+--------------+
		| name        | continent | area    | population | gdp          |
		+-------------+-----------+---------+------------+--------------+
		| Afghanistan | Asia      | 652230  | 25500100   | 20343000000  |
		| Albania     | Europe    | 28748   | 2831741    | 12960000000  |
		| Algeria     | Africa    | 2381741 | 37100000   | 188681000000 |
		| Andorra     | Europe    | 468     | 78115      | 3712000000   |
		| Angola      | Africa    | 1246700 | 20609294   | 100990000000 |
		+-------------+-----------+---------+------------+--------------+
		<strong>Output:</strong> 
		+-------------+------------+---------+
		| name        | population | area    |
		+-------------+------------+---------+
		| Afghanistan | 25500100   | 652230  |
		| Algeria     | 37100000   | 2381741 |
		+-------------+------------+---------+
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
SELECT name, population, area
FROM World
WHERE population >= 25000000
OR area >= 3000000;`}
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
							<p>Day 94: Solving one of LeetCode problems</p>
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

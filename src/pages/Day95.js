import React, { useState } from 'react';
import Highlight from 'react-highlight';
import { Container, Row, Col, Button } from 'react-bootstrap';

export default function Day95() {
	const [toggleAnswer, setToggleAnswer] = useState(false);

	const showAnswer = () => {
		setToggleAnswer(!toggleAnswer);
	};

	const leetCode = {
		name: '1873. Calculate Special Bonus',
		question: `<div><p>Table: <code>Employees</code></p>

		<pre>+-------------+---------+
		| Column Name | Type    |
		+-------------+---------+
		| employee_id | int     |
		| name        | varchar |
		| salary      | int     |
		+-------------+---------+
		employee_id is the primary key for this table.
		Each row of this table indicates the employee ID, employee name, and salary.
		</pre>
		
		<p>&nbsp;</p>
		
		<p>Write an SQL query to calculate the bonus of each employee. The bonus of an employee is <code>100%</code> of their salary if the ID of the employee is <strong>an odd number</strong> and <strong>the employee name does not start with the character </strong><code>'M'</code>. The bonus of an employee is <code>0</code> otherwise.</p>
		
		<p>Return the result table ordered by <code>employee_id</code>.</p>
		
		<p>The query result format is in the following example.</p>
		
		<p>&nbsp;</p>
		<p><strong>Example 1:</strong></p>
		
		<pre><strong>Input:</strong> 
		Employees table:
		+-------------+---------+--------+
		| employee_id | name    | salary |
		+-------------+---------+--------+
		| 2           | Meir    | 3000   |
		| 3           | Michael | 3800   |
		| 7           | Addilyn | 7400   |
		| 8           | Juan    | 6100   |
		| 9           | Kannon  | 7700   |
		+-------------+---------+--------+
		<strong>Output:</strong> 
		+-------------+-------+
		| employee_id | bonus |
		+-------------+-------+
		| 2           | 0     |
		| 3           | 0     |
		| 7           | 7400  |
		| 8           | 0     |
		| 9           | 7700  |
		+-------------+-------+
		<strong>Explanation:</strong> 
		The employees with IDs 2 and 8 get 0 bonus because they have an even employee_id.
		The employee with ID 3 gets 0 bonus because their name starts with 'M'.
		The rest of the employees get a 100% bonus.
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
SELECT employee_id,
CASE 
  WHEN (employee_id%2=1 AND name NOT LIKE "M%") THEN salary
  ELSE 0 
END AS bonus
FROM Employees
ORDER BY employee_id;`}
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
							<p>Day 95: Solving one of LeetCode problems</p>
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

import React, { useState } from 'react';
import Highlight from 'react-highlight';
import { Container, Row, Col, Button } from 'react-bootstrap';

export default function Day96() {
  const [toggleAnswer, setToggleAnswer] = useState(false);

  const showAnswer = () => {
    setToggleAnswer(!toggleAnswer);
  };

  const leetCode = {
    name: '1667. Fix Names in a Table',
    question: `<div><p>Table: <code>Users</code></p>

		<pre>+----------------+---------+
		| Column Name    | Type    |
		+----------------+---------+
		| user_id        | int     |
		| name           | varchar |
		+----------------+---------+
		user_id is the primary key for this table.
		This table contains the ID and the name of the user. The name consists of only lowercase and uppercase characters.
		</pre>
		
		<p>&nbsp;</p>
		
		<p>Write an SQL query to fix the names so that only the first character is uppercase and the rest are lowercase.</p>
		
		<p>Return the result table ordered by <code>user_id</code>.</p>
		
		<p>The query result format is in the following example.</p>
		
		<p>&nbsp;</p>
		<p><strong>Example 1:</strong></p>
		
		<pre><strong>Input:</strong> 
		Users table:
		+---------+-------+
		| user_id | name  |
		+---------+-------+
		| 1       | aLice |
		| 2       | bOB   |
		+---------+-------+
		<strong>Output:</strong> 
		+---------+-------+
		| user_id | name  |
		+---------+-------+
		| 1       | Alice |
		| 2       | Bob   |
		+---------+-------+
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
                {`SELECT user_id,CONCAT(UPPER(LEFT(name,1)), LOWER(RIGHT(name, LENGTH(name) - 1))) as name
FROM Users
ORDER BY user_id;`}
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
              <p>Day 96: Solving one of LeetCode problems</p>
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

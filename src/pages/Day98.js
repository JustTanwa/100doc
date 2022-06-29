import React, { useState } from 'react';
import Highlight from 'react-highlight';
import { Container, Row, Col, Button } from 'react-bootstrap';

export default function Day98() {
  const [toggleAnswer, setToggleAnswer] = useState(false);

  const showAnswer = () => {
    setToggleAnswer(!toggleAnswer);
  };

  const leetCode = {
    name: '1148. Article Views I',
    question: `<div><p>Table: <code>Views</code></p>

    <pre>+---------------+---------+
    | Column Name   | Type    |
    +---------------+---------+
    | article_id    | int     |
    | author_id     | int     |
    | viewer_id     | int     |
    | view_date     | date    |
    +---------------+---------+
    There is no primary key for this table, it may have duplicate rows.
    Each row of this table indicates that some viewer viewed an article (written by some author) on some date. 
    Note that equal author_id and viewer_id indicate the same person.
    </pre>
    
    <p>&nbsp;</p>
    
    <p>Write an SQL query to find all the authors that viewed at least one of their own articles.</p>
    
    <p>Return the result table sorted by <code>id</code> in ascending order.</p>
    
    <p>The query result format is in the following example.</p>
    
    <p>&nbsp;</p>
    <p><strong>Example 1:</strong></p>
    
    <pre><strong>Input:</strong> 
    Views table:
    +------------+-----------+-----------+------------+
    | article_id | author_id | viewer_id | view_date  |
    +------------+-----------+-----------+------------+
    | 1          | 3         | 5         | 2019-08-01 |
    | 1          | 3         | 6         | 2019-08-02 |
    | 2          | 7         | 7         | 2019-08-01 |
    | 2          | 7         | 6         | 2019-08-02 |
    | 4          | 7         | 1         | 2019-07-22 |
    | 3          | 4         | 4         | 2019-07-21 |
    | 3          | 4         | 4         | 2019-07-21 |
    +------------+-----------+-----------+------------+
    <strong>Output:</strong> 
    +------+
    | id   |
    +------+
    | 4    |
    | 7    |
    +------+
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
                {`/* Write your PL/SQL query statement below */
SELECT DISTINCT author_id AS id
FROM Views
WHERE author_id = viewer_id
ORDER BY id ASC;`}
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
              <p>Day 98: Solving one of LeetCode problems</p>
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

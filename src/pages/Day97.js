import React, { useState } from 'react';
import Highlight from 'react-highlight';
import { Container, Row, Col, Button } from 'react-bootstrap';

export default function Day97() {
  const [toggleAnswer, setToggleAnswer] = useState(false);

  const showAnswer = () => {
    setToggleAnswer(!toggleAnswer);
  };

  const leetCode = {
    name: '608. Tree Node',
    question: `<div><p>Table: <code>Tree</code></p>

    <pre>+-------------+------+
    | Column Name | Type |
    +-------------+------+
    | id          | int  |
    | p_id        | int  |
    +-------------+------+
    id is the primary key column for this table.
    Each row of this table contains information about the id of a node and the id of its parent node in a tree.
    The given structure is always a valid tree.
    </pre>
    
    <p>&nbsp;</p>
    
    <p>Each node in the tree can be one of three types:</p>
    
    <ul>
      <li><strong>"Leaf"</strong>: if the node is a leaf node.</li>
      <li><strong>"Root"</strong>: if the node is the root of the tree.</li>
      <li><strong>"Inner"</strong>: If the node is neither a leaf node nor a root node.</li>
    </ul>
    
    <p>Write an SQL query to report the type of each node in the tree.</p>
    
    <p>Return the result table <strong>ordered</strong> by <code>id</code> <strong>in ascending order</strong>.</p>
    
    <p>The query result format is in the following example.</p>
    
    <p>&nbsp;</p>
    <p><strong>Example 1:</strong></p>
    <img alt="" src="https://assets.leetcode.com/uploads/2021/10/22/tree1.jpg" style="width: 304px; height: 224px;">
    <pre><strong>Input:</strong> 
    Tree table:
    +----+------+
    | id | p_id |
    +----+------+
    | 1  | null |
    | 2  | 1    |
    | 3  | 1    |
    | 4  | 2    |
    | 5  | 2    |
    +----+------+
    <strong>Output:</strong> 
    +----+-------+
    | id | type  |
    +----+-------+
    | 1  | Root  |
    | 2  | Inner |
    | 3  | Leaf  |
    | 4  | Leaf  |
    | 5  | Leaf  |
    +----+-------+
    <strong>Explanation:</strong> 
    Node 1 is the root node because its parent node is null and it has child nodes 2 and 3.
    Node 2 is an inner node because it has parent node 1 and child node 4 and 5.
    Nodes 3, 4, and 5 are leaf nodes because they have parent nodes and they do not have child nodes.
    </pre>
    
    <p><strong>Example 2:</strong></p>
    <img alt="" src="https://assets.leetcode.com/uploads/2021/10/22/tree2.jpg" style="width: 64px; height: 65px;">
    <pre><strong>Input:</strong> 
    Tree table:
    +----+------+
    | id | p_id |
    +----+------+
    | 1  | null |
    +----+------+
    <strong>Output:</strong> 
    +----+-------+
    | id | type  |
    +----+-------+
    | 1  | Root  |
    +----+-------+
    <strong>Explanation:</strong> If there is only one node on the tree, you only need to output its root attributes.
    </pre>
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
                {`/* Write your PL/SQL query statement below */
WITH tree_expand AS
(
SELECT id,
       level AS node_level
FROM tree
START WITH p_id IS NULL
CONNECT BY PRIOR id = p_id
)

SELECT id,
       CASE WHEN node_level = 1 THEN 'Root'
            WHEN id NOT IN (SELECT p_id
                            FROM tree
                            WHERE p_id IS NOT NULL) THEN 'Leaf'
            ELSE 'Inner'
            END AS "Type"
FROM tree_expand
ORDER BY id`}
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
              <p>Day 97: Solving one of LeetCode problems</p>
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

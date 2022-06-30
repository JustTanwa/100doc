import React, { useState } from 'react';
import Highlight from 'react-highlight';
import { Container, Row, Col, Button } from 'react-bootstrap';

export default function Day99() {
  const [toggleAnswer, setToggleAnswer] = useState(false);

  const showAnswer = () => {
    setToggleAnswer(!toggleAnswer);
  };

  const leetCode = {
    name: '607. Sales Person',
    question: `<div><p>Table: <code>SalesPerson</code></p>

    <pre>+-----------------+---------+
    | Column Name     | Type    |
    +-----------------+---------+
    | sales_id        | int     |
    | name            | varchar |
    | salary          | int     |
    | commission_rate | int     |
    | hire_date       | date    |
    +-----------------+---------+
    sales_id is the primary key column for this table.
    Each row of this table indicates the name and the ID of a salesperson alongside their salary, commission rate, and hire date.
    </pre>
    
    <p>&nbsp;</p>
    
    <p>Table: <code>Company</code></p>
    
    <pre>+-------------+---------+
    | Column Name | Type    |
    +-------------+---------+
    | com_id      | int     |
    | name        | varchar |
    | city        | varchar |
    +-------------+---------+
    com_id is the primary key column for this table.
    Each row of this table indicates the name and the ID of a company and the city in which the company is located.
    </pre>
    
    <p>&nbsp;</p>
    
    <p>Table: <code>Orders</code></p>
    
    <pre>+-------------+------+
    | Column Name | Type |
    +-------------+------+
    | order_id    | int  |
    | order_date  | date |
    | com_id      | int  |
    | sales_id    | int  |
    | amount      | int  |
    +-------------+------+
    order_id is the primary key column for this table.
    com_id is a foreign key to com_id from the Company table.
    sales_id is a foreign key to sales_id from the SalesPerson table.
    Each row of this table contains information about one order. This includes the ID of the company, the ID of the salesperson, the date of the order, and the amount paid.
    </pre>
    
    <p>&nbsp;</p>
    
    <p>Write an SQL query to report the names of all the salespersons who did not have any orders related to the company with the name <strong>"RED"</strong>.</p>
    
    <p>Return the result table in <strong>any order</strong>.</p>
    
    <p>The query result format is in the following example.</p>
    
    <p>&nbsp;</p>
    <p><strong>Example 1:</strong></p>
    
    <pre><strong>Input:</strong> 
    SalesPerson table:
    +----------+------+--------+-----------------+------------+
    | sales_id | name | salary | commission_rate | hire_date  |
    +----------+------+--------+-----------------+------------+
    | 1        | John | 100000 | 6               | 4/1/2006   |
    | 2        | Amy  | 12000  | 5               | 5/1/2010   |
    | 3        | Mark | 65000  | 12              | 12/25/2008 |
    | 4        | Pam  | 25000  | 25              | 1/1/2005   |
    | 5        | Alex | 5000   | 10              | 2/3/2007   |
    +----------+------+--------+-----------------+------------+
    Company table:
    +--------+--------+----------+
    | com_id | name   | city     |
    +--------+--------+----------+
    | 1      | RED    | Boston   |
    | 2      | ORANGE | New York |
    | 3      | YELLOW | Boston   |
    | 4      | GREEN  | Austin   |
    +--------+--------+----------+
    Orders table:
    +----------+------------+--------+----------+--------+
    | order_id | order_date | com_id | sales_id | amount |
    +----------+------------+--------+----------+--------+
    | 1        | 1/1/2014   | 3      | 4        | 10000  |
    | 2        | 2/1/2014   | 4      | 5        | 5000   |
    | 3        | 3/1/2014   | 1      | 1        | 50000  |
    | 4        | 4/1/2014   | 1      | 4        | 25000  |
    +----------+------------+--------+----------+--------+
    <strong>Output:</strong> 
    +------+
    | name |
    +------+
    | Amy  |
    | Mark |
    | Alex |
    +------+
    <strong>Explanation:</strong> 
    According to orders 3 and 4 in the Orders table, it is easy to tell that only salesperson John and Pam have sales to company RED, so we report all the other names in the table salesperson.
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
SELECT name 
FROM salesperson 
WHERE sales_id NOT IN
  (SELECT sales_id FROM orders
   WHERE com_id IN
        (SELECT com_id FROM company
         WHERE name = 'RED'));`}
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
              <p>Day 99: Solving one of LeetCode problems</p>
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

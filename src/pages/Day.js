import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import Day1 from './Day1';
import Day2 from './Day2';
import Day3 from './Day3';

export default function Day() {
  const { dayNum } = useParams();

  const days = {
    day1: <Day1 />,
    day2: <Day2 />,
    day3: <Day3 />
  }

  return (
    <main>
        {days[dayNum]}
    </main>
  )
}

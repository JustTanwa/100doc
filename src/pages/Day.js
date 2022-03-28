import React from 'react';
import { useParams } from 'react-router-dom';
import Day1 from './Day1';
import Day2 from './Day2';
import Day3 from './Day3';
import Day4 from './Day4';

export default function Day() {
  const { dayNum } = useParams();

  const days = {
    day1: <Day1 />,
    day2: <Day2 />,
    day3: <Day3 />,
    day4: <Day4 />,
  }

  return (
    <main>
      {days[dayNum]}
    </main>
  )
}

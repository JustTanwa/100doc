import React from 'react';
import { useParams } from 'react-router-dom';
import Day1 from './Day1';
import Day2 from './Day2';
import Day3 from './Day3';
import Day4 from './Day4';
import Day5 from './Day5';
import Day6 from './Day6';
import Day7 from './Day7';
import Day8 from './Day8';
import Day9 from './Day9';
import Day10 from './Day10';

export default function Day() {
  const { dayNum } = useParams();

  const days = {
    day1: <Day1 />,
    day2: <Day2 />,
    day3: <Day3 />,
    day4: <Day4 />,
    day5: <Day5 />,
    day6: <Day6 />,
    day7: <Day7 />,
    day8: <Day8 />,
    day9: <Day9 />,
    day10: <Day10 />,
  }

  return (
    <main>
      {days[dayNum]}
    </main>
  )
}

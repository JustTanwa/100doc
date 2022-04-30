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
import Day11 from './Day11';
import Day12 from './Day12';
import Day13 from './Day13';
import Day14 from './Day14';
import Day15 from './Day15';
import Day16 from './Day16';
import Day17 from './Day17';
import Day18 from './Day18';
import Day19 from './Day19';
import Day20 from './Day20';
import Day21 from './Day21';
import Day22 from './Day22';
import Day23 from './Day23';
import Day24 from './Day24';
import Day25 from './Day25';
import Day26 from './Day26';
import Day27 from './Day27';
import Day28 from './Day28';
import Day29 from './Day29';
import Day30 from './Day30';
import Day31 from './Day31';
import Day32 from './Day32';
import Day33 from './Day33';
import Day34 from './Day34';
import Day35 from './Day35';
import Day36 from './Day36';
import Day37 from './Day37';

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
		day11: <Day11 />,
		day12: <Day12 />,
		day13: <Day13 />,
		day14: <Day14 />,
		day15: <Day15 />,
		day16: <Day16 />,
		day17: <Day17 />,
		day18: <Day18 />,
		day19: <Day19 />,
		day20: <Day20 />,
		day21: <Day21 />,
		day22: <Day22 />,
		day23: <Day23 />,
		day24: <Day24 />,
		day25: <Day25 />,
		day26: <Day26 />,
		day27: <Day27 />,
		day28: <Day28 />,
		day29: <Day29 />,
		day30: <Day30 />,
		day31: <Day31 />,
		day32: <Day32 />,
		day33: <Day33 />,
		day34: <Day34 />,
		day35: <Day35 />,
		day36: <Day36 />,
		day37: <Day37 />,
	};

	return <main className='mw-100'>{days[dayNum]}</main>;
}

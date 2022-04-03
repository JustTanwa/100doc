import React, { useState } from 'react';
import Highlight from 'react-highlight';
import { Container, Row, Col, Button } from 'react-bootstrap';
import 'highlight.js/styles/atom-one-dark.css';

export default function Day6() {
	const [toggleAnswer, setToggleAnswer] = useState(false);

	const showAnswer = () => {
		setToggleAnswer(!toggleAnswer);
	};

	const codeWars = {
		name: 'Next bigger number with the same digits',
		question: `Create a function that takes a positive integer and returns the next bigger number that can be formed by rearranging its digits. For example:
        <br>
        12 ==> 21 <br>
        513 ==> 531 <br>
        2017 ==> 2071 <br>
        nextBigger(num: 12)   // returns 21 <br>
        nextBigger(num: 513)  // returns 531 <br>
        nextBigger(num: 2017) // returns 2071 <br>
        If the digits can't be rearranged to form a bigger number, return -1 (or nil in Swift):
        <br>
        9 ==> -1 <br>
        111 ==> -1 <br>
        531 ==> -1 <br>
        nextBigger(num: 9)   // returns nil <br>
        nextBigger(num: 111) // returns nil <br>
        nextBigger(num: 531) // returns nil`,
		level: '4 kyu',
	};

	return (
		<main>
			<Container className='w-80 h-75 justify-content-center position-relative'>
				<Row>
					<Col
						lg={8}
						style={
							toggleAnswer
								? { overflowY: 'scroll', maxHeight: '550px' }
								: { overflow: 'hidden', maxHeight: '550px' }
						}
					>
						<div className='code-container position-relative'>
							<Highlight className='language-javascript'>
								{`function nextBigger(n){
  // helper function to turn numbers into array of digits
  function getDigits(number) {
    const digitsArr = [];
    while(number >= 1) {
      digitsArr.push(Math.floor(number % 10));
      number /= 10;
    }
    return digitsArr;
  }
  
  // store digits in the correct order
  const digits = getDigits(n).reverse();
  // store length
  const length = getDigits(n).length;
  // sort the digit array to find biggest possible number
  const largestNum = +[...digits].sort((a,b) => b - a).join("");
  // if input is already biggest, return
  if (n === largestNum) return -1;
  
  // actual function to help find the next biggest number
  function findSubNextBigger(arr) {
    const number = +arr.join("")
    const length = arr.length;
    const largestNum = +[...arr].sort((a,b) => b - a).join("");
    if (number === largestNum) return -1;
    let index;
    // loop through each numbers and find indices of the two numbers
    // to be swapped
    outer: for(let i = 0; i < length; i++) {
      for(let j = i; j < length - 1; j++) {
        if (arr[length - 1 - i] > arr[length - 2 - j]) {
          let curDigit = arr.splice(length - 1 - i, 1)[0];
          arr.splice(length - 2 - j, 0, curDigit);
          index = length - 2 - j;
          break outer;
        } 
      }
    } 
    // truncate the arr from where the indices were swapped
    // and find lowest possible combination with the remaining digits
    const lowestArr = arr.slice(index + 1).sort((a, b) => a - b);
      arr.splice(index + 1, length, ...lowestArr);
    return arr;
  }
  
  // starting from the end, evaluate the sub arr  to find the next biggest number
  for (let i = length - 1; i >= 0; i--) {
    if(findSubNextBigger(digits.slice(i)) !== -1) {
      // truncate the sub array from the digits array and join the return from 
      // findSubNextBigger function
      digits.splice(i, length, ...findSubNextBigger(digits.slice(i)));
      break; // exit loop as new biggest is found
    };
  }
  
  // join the array back and return
  return +digits.join("") || -1;
}`}
							</Highlight>
							<div
								className={
									'overlay position-absolute' +
									(toggleAnswer ? '' : ' overlayBlur')
								}
							></div>
						</div>
					</Col>
					<Col>
						<section>
							<p>Day 6: Solving one of the Kata on CodeWars</p>
							<p>
								<strong>{codeWars.name}</strong> {codeWars.level}
							</p>
							<p dangerouslySetInnerHTML={{ __html: codeWars.question }}></p>
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

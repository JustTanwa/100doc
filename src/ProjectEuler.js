// Day 1 - Problem 52 
export const problem52 = {
    name: "Permuted multiples",
    question: `It can be seen that the number, 125874, and its double, 251748, contain exactly the same digits, but in a different order.
    Find the smallest positive integer, x, such that 2x, 3x, 4x, 5x, and 6x, contain the same digits.`,
    solution: solution52(),
}

export function solution52 () {
    let x = 0;
    for (let i = 10 ; i < Infinity; i++) {
        x = i;
        const multiples = [2 * x, 3 * x, 4 * x, 5 * x, 6 * x];
        const digits = getDigits(x);
        const multiplesDigits = multiples.map(getDigits);
        
        if (checkForPermutation(digits, multiplesDigits)) {
            break;
        }
    }

    function checkForPermutation(num, multiples) {
        return multiples.every( multiplesDigitArr => multiplesDigitArr.every( digit => num.includes(digit)));
    }

    function getDigits(num) {
        const numArr = num.toString().split('')
        return numArr.map( digit => +digit);
    }
    return x;
}

// Day 2 - Problem 16
export const problem16 = {
    name: "Power digit sum",
    question: `2<sup>15</sup> = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.
    What is the sum of the digits of the number 2<sup>1000</sup> ?`,
    solution: 1366,
}

export function solution16(n=2, p=1000) {
    let bigIntNum = Math.pow(n, p);
    
    function sumOfDigits(num) {
        return num.toString().split("").map( digit => +digit).reduce( (digit, tot) => tot + digit, 0);
    }
    return sumOfDigits(bigIntNum);
}

// Day 3 - Problem 35
export const problem35 = {
    name: "Circular primes",
    question: `The number, 197, is called a circular prime because all rotations of the digits: 197, 971, and 719, are themselves prime.

    There are thirteen such primes below 100: 2, 3, 5, 7, 11, 13, 17, 31, 37, 71, 73, 79, and 97.
    
    How many circular primes are there below one million?`,
    solution: 55
}

export function solution35() {
    let circularPrimes = [];
    
    function isPrime(number) {
        // 2 is first prime
        if (number === 2) return true;
        // even numbers are not prime
        if (number % 2 === 0) return false;
        // the divisors are repeats after sqrt of n
        const sqrt = Math.floor(Math.sqrt(number));
        for (let i = 3; i <= sqrt; i++) {
            // if there are other divisor besides 1 and n then its not prime
            if (number % i === 0) return false;
        }
        return true;
    }
    function isCircular( prime ) {
        let rotatedPrimes = []; // containing all variations of the rotated primes
        let nextNumber = prime; // next number to rotate

        // deals with rotating the number
        const rotater =  num => {
            let strNum = num.toString().split("");
            strNum.push(strNum.splice(0,1)[0]);
            return strNum.join("");
        }
        // rotate the number depending on the number of digits
        for (let i = 0; i < String(prime).length; i++) {
            rotatedPrimes.push(nextNumber);
            nextNumber = rotater(nextNumber);
        }
        // check if all variations of rotated primes are in fact prime
        return rotatedPrimes.every( newNum => isPrime(Number(newNum)));
    }
    
    for (let i = 2; i <= 1000000; i++) {
        if (isPrime(i)) {
            if (isCircular(i)) circularPrimes.push(i);
        }
    }
    return circularPrimes.length;
}

// Day 4 - Problem43
export const problem43 = {
    name: "Sub-string divisibility",
    question: `The number, 1406357289, is a 0 to 9 pandigital number because it is made up of each of the digits 0 to 9 in some order, but it also has a rather interesting sub-string divisibility property.
    <p>Let <i>d</i><sub>1</sub> be the 1<sup>st</sup> digit, <i>d</i><sub>2</sub> be the 2<sup>nd</sup> digit, and so on. In this way, we note the following:</p>
    <ul><li><i>d</i><sub>2</sub><i>d</i><sub>3</sub><i>d</i><sub>4</sub>=406 is divisible by 2</li>
<li><i>d</i><sub>3</sub><i>d</i><sub>4</sub><i>d</i><sub>5</sub>=063 is divisible by 3</li>
<li><i>d</i><sub>4</sub><i>d</i><sub>5</sub><i>d</i><sub>6</sub>=635 is divisible by 5</li>
<li><i>d</i><sub>5</sub><i>d</i><sub>6</sub><i>d</i><sub>7</sub>=357 is divisible by 7</li>
<li><i>d</i><sub>6</sub><i>d</i><sub>7</sub><i>d</i><sub>8</sub>=572 is divisible by 11</li>
<li><i>d</i><sub>7</sub><i>d</i><sub>8</sub><i>d</i><sub>9</sub>=728 is divisible by 13</li>
<li><i>d</i><sub>8</sub><i>d</i><sub>9</sub><i>d</i><sub>10</sub>=289 is divisible by 17</li>
</ul>
<p>Find the sum of all 0 to 9 pandigital numbers with this property.</p>`,
    solution: solution43(),
}

export function solution43() {
    // find all permutations of 1023456789 -
    const findPermutations = (numStr) => {
        let digits = numStr.split(""); // convert number string to array
        let listOfPermutations = []; // will store list of permutated numbers

        // recursive function to permute the number
        function permute(digitsArr, memo = []) {
            // base case, stop the call if no more digits in the digits arr
            if (digitsArr.length === 0) {
                // add the permutated number into the list
                listOfPermutations.push(memo.join("")); 
            } else {
                for (let i = 0; i < digitsArr.length; i++) {
                    let copyDigitsArr = [...digitsArr];
                    // set current digit and remove from copyDigits array
                    let currentDigit = copyDigitsArr.splice(i, 1); 
                    permute([...copyDigitsArr], memo.concat(currentDigit));
                }
            }
        }

        permute(digits); // start the recursive function
        return listOfPermutations;
    }
    
    const isDivisible = (numStr) => {
        return ( Number(numStr.slice(7,10)) % 17 === 0 &&
        Number(numStr.slice(2,5)) % 3 === 0 &&
        Number(numStr.slice(3,6)) % 5 === 0 &&
        Number(numStr.slice(4,7)) % 7 === 0 &&
        Number(numStr.slice(5,8)) % 11 === 0 &&
        Number(numStr.slice(6,9)) % 13 === 0 &&
        Number(numStr.slice(1,4)) % 2 === 0 );
    }

    const allPandigitals = findPermutations("1234567890")
                            .filter( numstr => isDivisible(numstr));

    return allPandigitals.reduce( (prev, next) => Number(prev) + Number(next), 0);
}
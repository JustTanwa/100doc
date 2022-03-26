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
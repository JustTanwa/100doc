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
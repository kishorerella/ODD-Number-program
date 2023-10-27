/**
 * Implementation of the OneDigitDifference (ODD) Number program.
 */

// Constants for minimum and maximum numbers to check.
const MIN_NUMBER = 0;
const MAX_NUMBER = 10000000;
let oddCount = 0;

/**
 * Function to check if the difference between the digits of a number is 1.
 * @param {number} number - The number to check for ODD property.
 * @returns {boolean} - True if the difference between each digit is 1.
 */
function hasOneDigitDifference(number) 
{
    const numberString = number.toString();
    for (let i = 0; i < numberString.length - 1; i++) 
    {
        if (Math.abs(Number(numberString[i]) - Number(numberString[i + 1])) !== 1) 
        {
            return false;
        }
    }
    return true;
}

/**
 * Function to determine whether a number is prime.
 * @param {number} n - The number to check for primality.
 * @returns {boolean} - True if the number is prime.
 */
function isPrime(n)
  {
    if (n <= 1) return false;
    for (let i = 2; i < n; i++)
    {
        if (n % i === 0) return false;
    }
    return true;
}

/**
 * Function to find and count ODD numbers within the specified range.
 * @returns {Array} - List of ODD numbers.
 */
function findODDNumbers() 
{
    const oddNumbers = [];
    for (let i = MIN_NUMBER; i < MAX_NUMBER; i++) 
    {
        if (hasOneDigitDifference(i)) 
        {
            oddNumbers.push(i);
            oddCount++;
        }
    }
    return oddNumbers;
}

/**
 * Function to find and count prime numbers in the list of ODD numbers.
 * @param {Array} oddNumbers - List of ODD numbers to check for primes.
 * @returns {number} - Count of prime numbers.
 */
function countPrimeNumbersInODDList(oddNumbers) 
{
    let primeCount = 0;
    for (let i = 0; i < oddNumbers.length; i++) 
    {
        if (isPrime(oddNumbers[i])) 
        {
            primeCount++;
        }
    }
    return primeCount;
}

/**
 * Main function to execute the program.
 */
function main() 
{
    const oddNumbers = findODDNumbers();
    console.log("Total ODD numbers within the range:", oddCount);
    const primeCount = countPrimeNumbersInODDList(oddNumbers);
    console.log("Total prime numbers in the ODD numbers list:", primeCount);
}

main();

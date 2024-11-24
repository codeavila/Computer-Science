/*
 * Complete the 'arrayManipulation' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. 2D_INTEGER_ARRAY queries
 *  Run Code Online => https://www.typescriptlang.org/play/?#code/PQKgUABCEMIPYFsAOAbApgFzRDALbA5AIYBOJRAngLJEB2AlkgK4pEb1y0EQBmTtAY3acIAIzQo4AdwB0kcFAgAVfL35COtCPQDOENAA8kaIWgAmOOBBKYmJLUQgAZAPIA5AOIB9AJJulAKIeAQBKcooq2HyCwg4CAmhIGHo8cCiSUvS0AOYQSKRECJhoJDoAXPIQEACMMhB+gcEhELSVEABMde0AIr7+QaFeAIIhIUMAmhAAjkwl9Gg68sBgYOgYLRAAvBAArADcYMDAEEQANKJbAHzatGaGC4fHANZXEABuRCizlidmFiJ4bDkHLYRynMSQKpQ6HQo5nUTgp6PCBraazEjzPTbADa2Oqp3ap2qAAZiQBdU7Ywk7ImkinYgDMpwALLTyWSDqiZnMFlsINj+YSAGynAAc9KZNIA7PT8aKifSaQBOIk7MkclaohBEAwANU+322xIO0Q0IlI5GodEYLDYmgAFLRwdyMQsAJQQADekKqRwgAHUMVgIBQ4HYIAI4HcIPgbD6IPHUcDsmghgAhPnYjXQ1FmCi0Qr0ARDMiUPm0NBSCA0JD2t0HaHxl2YmTa2vN7Cba7emFQyO0HRpNAySTZe0d+vx6HJ1MZ7YpjAhOgp9Pj9HzSe9qoCGxsNA+W73HT2vMFhBFkuW8Ez9PO9doKlkzdQgC+k-jNgwdi02r1BrQBwvispqxBAC5LiCq4djoXhIHAOj0LEbo9lCfodvyZKvB22LkicEAAD5ojyeKYaIiaYDgyCXpm2ZQqkJD2qi9B8tBsHwYhmg4Ry2gQAAPNsrFwQhsQkXs2gANTichU5QhgVFkDIzA6Lg9r0M+VRAdOtj2JRSCXoBwHqKBO5oHuB53AYCwnvmhbFqWFDXsus6ItJ0L0YxFHMUaYnMfx1hOemI5oDkeAQAAtDUPmSa5W70DwED2gAhKetmXpQMi4EQx43mm2L0E+HooVuUIpeedmWjIOiYPaOV5RSEDEupMKaVuqICHYNi0Bg+pfJ2EClRe9kyAuNUBbl+UeuJEBPA2W4DeV6VVRgo2QeN9XtWQwXdf+TXQnFCUbZ1229RA1y-j1syFTJvbnf+fKHVtF0AddEAtRpYBAWAIGaL8ZjmUePg8AEBi6Mt81pQ500xVUqI6EwCB8tZZ6DZaEBTU8TW3SdvEQHDCMAPwQFjhq4-DEBlETOpPXyxPPZ9-aDugI5wGOFqUDQDDMKwsSOnePI6G6k5AA
 * Note: This implementation fails 7 out of 13 tests due to high memory usage and inefficient time complexity.
 * Improvements are needed to optimize both memory and processing efficiency, especially for large input sizes.
 */

let n = 5;
// a, b => indices defining the range (inclusive)
// k => value to add over the range from a to b
// Example queries
// let queries = [[1, 2, 100], [2, 5, 100], [3, 4, 100]];
let queries = [[2, 6, 8], [3, 5, 7], [1, 8, 1], [5, 9, 15]];

let maxValue = 0;
function arrayManipulation(n, queries) {
    // Initialize a dynamic array to keep track of increments
    let rangeAB = [];
    let dynamicArray = new Map();
    
    // Iterate through each query and apply the operation
    queries.forEach(querie => {
        console.log(querie);
        rangeAB = getRangeAB(querie);
        createIndexes(dynamicArray, rangeAB, querie[2]);
    });

    return maxValue;
}

function getRangeAB(queries_position){
    // Generate an array containing all indices from a to b (inclusive)
    // This approach is inefficient for large ranges, causing high memory usage
    let tmpArr = [];
    for (let i = queries_position[0]; i <= queries_position[1]; i++) {
        tmpArr.push(i);
    }
    return tmpArr;
}

function createIndexes(dynamicArray, rangeAB, k) {
    // Update values for each index in the range, which is inefficient for large ranges
    for (let i = 0; i <= rangeAB.length - 1; i++) {
        if (!dynamicArray.has(rangeAB[i])) {
            dynamicArray.set(rangeAB[i], 0);
        }
        let currentValue = dynamicArray.get(rangeAB[i]) + k;
        dynamicArray.set(rangeAB[i], currentValue);
        if (currentValue > maxValue) {
            maxValue = currentValue;
        }
    }
}

function addIndexesIfExist(dynamicArray, k) {
    // This function is currently not used effectively and may be redundant
    let sum = (dynamicArray + k);
    maxValue < sum ? maxValue = sum : maxValue = maxValue;
}

console.log(arrayManipulation(n, queries));

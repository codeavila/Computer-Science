/*
 * Complete the 'arrayManipulation' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. 2D_INTEGER_ARRAY queries
 *
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

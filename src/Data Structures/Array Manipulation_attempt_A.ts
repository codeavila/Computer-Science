/*
 * Complete the 'arrayManipulation' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. 2D_INTEGER_ARRAY queries
 *  FAIL 7 test of 13
 *  Failed lack of memory and time complexity
 */

let n = 5;
// a,b => indexes
// k => value to add on the range a , b
              //a,b, k
// let queries = [[1,2,100],[2,5,100],[3,4,100]];
let queries = [ [2,6,8],[3,5,7],[1,8,1],[5,9,15]];

let maxValue = 0;
function arrayManipulation(n, queries) {
    // Write your code here
    
    let rangeAB = [];
    let dynamicArray = new Map();
    
    queries.map(querie => {
        console.log(querie);
        rangeAB = getRangeAB(querie);
        createIndexes(dynamicArray, rangeAB, querie[2]);
    });

    return maxValue;
}

function getRangeAB(queries_position){
    // querie [] => querie[0] a | querie[1] b
    let tmpArr = [];
    for(let i = queries_position[0]; i <= queries_position[1]; i++){
        tmpArr.push(i);
    }
    return tmpArr;
}

function createIndexes(dynamicArray, rangeAB, k){
    for(let i = 0; i <= rangeAB.length - 1; i++){
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

function addIndexesIfExist(dynamicArray, k){
    let sum = (dynamicArray + k);
    maxValue < sum ? maxValue = sum : maxValue = maxValue;
}

console.log(arrayManipulation(n, queries));

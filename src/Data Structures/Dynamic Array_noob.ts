/*
 * Complete the 'dynamicArray' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts the following parameters:
 *  1. INTEGER n
 *  2. 2D_INTEGER_ARRAY queries
 * Run Code Online => https://www.typescriptlang.org/play/?#code/PQKgUABCEMIPYFsAOAbApgFzRDALbA5ACYCeAdgIYICWAxgIIBOjFJBEAZgK5m0bVwyEAEZoUcAO4A6SOCgQAKvk48+AodQDOENAA8kaPmiI44ERpi6MhFIQEkAcgoCiAcWcAlAPr0PH+gCaMvJK2Ny8-IIQFLS0aEgY2nhhcCjiEtRkAOYQSBQsCJhojJoAXLIQEACMUhCOLu4eEGQVEABMtW0AIl71bp4+foEQAI5cxdRomrLAYGC0gpoYzRAAvO0A3BDAwBAOXAiijBBwHDrIGCTRzKzTC2RLo2sQAKxbO3sHRydnYxNTYHQyxQFCW9AeEmKzwADBtAZhohCoesANoAXThQIgpDITBYV1RGLmHyqawAfNEiCYAhAAG4UFDjUzRCCaAy0agcOjXfHzRbLP6MSbaVGQSoQFFVAA0EGhMpeaJl212AEVxowrlVShB6FTXszkhBaAzaFwQVgTPleeKJdLqjKAOyKyofNXFK5tbW6kwOg3KY0oU3m4w81hiyqSmVyiAAZmdyogbo1sa9epjfuwAaDFAtoZI4YlbRlduh8dd6quABZta4EfTGWFGIg84iTFwkEQc9gQWCkYwCyii-bqmjxeX3a8a3WGUyOE2EC3bG2O12ID2MODNJD+0SwOE1FEcVQ6HiABRkGWC4UASggAG8Cx8YBZV4ajzRaC2MngVmgLldNC4YQrVuAtaBfLAunIY8GGYc9rzhG17k0VI0CkcQslPAAiOwyGofgGWxaCPzzUosJlHE8VYBC5htD47CwFgsBOWkoTQGJcFGCsCw4OBjlPLFqBhLYhIAHi4-5NHQtBsjwESAGp5NvB8bSQ-kJI1BQSAMZ4rymFFqDRFFS0Q1TKmQ5ZdF09VhQMoyqiJMzzPUgkNNswzB0cpyCxtTkIFPQUSC0nTVlC6plJ8pzx2TS4dK1HU9XrJkMDMQ0KCQJAm0y6hVxA-MnNUwSiCs9ZTysgA9NdQQ3PtbwAUmaUyCsqCgqQUOAHDQCQqJIU9qGKmUSBogqAF8dBQTRsD8gKK2C7BQvWNoIuasdVQrHBtOwT0IFrZZDSS7AlwgdtO2Y9dN23SKzKKkr-Iqqrey3Yp6saq7Cuqi7kQgLJMAANRnNAADF5x6vqBogIamua2wnsYKQkC4TRcAEj7aqhm0RoLTGwMWVD0LgTCsMBzJCPfbk8rIijyB64bxWQvGMOwz6SkpxFYdpyoLAwKwbD7OFsf3SIhHA9jIOIk84LIZbxV4-jBOEiAxMaxXFOlszKJuEh4cR5H0Q5iBMYF1QhcpIh2s67rNdPCRcDoXA8RlA61aI3FNZRG27bxNFtaR08nf5uZBfUb6-oB4HEFBj3aHt5gZSQOBNHw9Rna5nmXZ693bejr2UXjxOhaJbGPmcXRDC4ZjDSDqJv04rBHgO6Yydgxhz0vGyphooA
 */


// Note: This is not the optimal solution but rather my initial attempt to understand and solve the problem.
// One major downside is that I pre-allocate all arrays, which can lead to inefficient use of memory.
// Ideally, these subarrays should be created dynamically during query execution.
// 100 100 => one hundred array bad idea with this code
// 1 345255357 205970905
// 1 570256166 75865401
// 1 94777800 645102173
// 1 227496730 16649450
// 1 82987157 486734305
// 1 917920354 757848208
// 1 61379773 817694251
// 1 330547128 112869154
// 1 328743001 855677723
// 1 407951306 669798718
// 1 21506172 676980108
// 1 49911390 342109400
// 1 980306253 305632965
// 2 736380701 402184046
// 2 798108301 416334323
// 1 254839279 1370035
// 1 109701362 2800586
// 1 374257441 165208824
// 1 624259835 477431250


const n = 2; // Number of empty arrays
const q = 5; // Number of queries
let lastAnswer = 0;
let answer = [];
let dynArray = [];

// 1 => add Y value to a specific array
const queries = [
    [1, 0, 5],  // Query 1: Add 5 to the calculated array
    [1, 1, 7],  // Query 2: Add 7 to the calculated array
    [1, 0, 3],  // Query 3: Add 3 to the calculated array
    [2, 1, 0],  // Query 4: Get value from array and update lastAnswer
    [2, 1, 1]   // Query 5: Get value from array and update lastAnswer
];

function dynamicArr(n, queries) {
    // Create the dynamic array with n empty subarrays
    createDynamicArr(n);
    console.log("Initial dynamic array:", dynArray);

    // Iterate over each query
    for (let i = 0; i < queries.length; i++) {
        const queryType = queries[i][0];
        const x = queries[i][1];
        const y = queries[i][2];
        
        if (queryType === 1) {
            // Query type 1: Add value to the appropriate array
            let idx = (x ^ lastAnswer) % n;
            addToNewArray(idx, y);
        } else if (queryType === 2) {
            // Query type 2: Get the value and update lastAnswer
            let idx = (x ^ lastAnswer) % n;
            lastAnswer = getValueFromArray(idx, y);
            answer.push(lastAnswer);
        }
    }

    console.log("Final dynamic array:", dynArray);
    console.log("Answers:", answer);
    return answer;
}

function createDynamicArr(n) {
    for (let i = 0; i < n; i++) {
        dynArray.push([]);
    }
}

function addToNewArray(whichArr, value) {
    dynArray[whichArr].push(value);
}

function getValueFromArray(whichArr, position) {
    return dynArray[whichArr][position];
}

// Execute the function with test values
dynamicArr(n, queries);

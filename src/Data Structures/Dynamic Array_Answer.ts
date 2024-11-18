/*
 * Complete the 'dynamicArray' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. 2D_INTEGER_ARRAY queries
 */
let lastAnswer = 0;
let answer = [];
let dynArray = [];

function dynamicArray(n, queries) {
    // Use a Map instead of an array of arrays to reduce memory usage
    const dynamicArray = new Map();
    let lastAnswer = 0;
    const answer = [];

    // Iterate over each query
    for (let i = 0; i < queries.length; i++) {
        const queryType = queries[i][0];
        const x = queries[i][1];
        const y = queries[i][2];

        // Calculate the index to use
        let idx = (x ^ lastAnswer) % n;

        if (queryType === 1) {
            // If the array for idx does not exist, create it
            if (!dynamicArray.has(idx)) {
                dynamicArray.set(idx, []);
            }
            // Add the value to the appropriate array
            dynamicArray.get(idx).push(y);
        } else if (queryType === 2) {
            // Get the value at the specified position in the array
            if (dynamicArray.has(idx)) {
                const arrayAtIdx = dynamicArray.get(idx);
                lastAnswer = arrayAtIdx[y % arrayAtIdx.length];
                answer.push(lastAnswer);
            }
        }
    }

    return answer;
}
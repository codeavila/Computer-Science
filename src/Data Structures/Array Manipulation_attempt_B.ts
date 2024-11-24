/*
 * Complete the 'arrayManipulation' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. 2D_INTEGER_ARRAY queries
 *  Run Code Online => https://www.typescriptlang.org/play/?#code/PQKgUABCEMIPYFsAOAbApgFzRDALbA5AIYBOJRAngLJEB2AlkgK4pEb1y0EQBmTtAY3acIAIzQo4AdwB0kcFAgAVfL35COtCPQDOENAA8kaIWgAmOOBBKYmJLUQgAZAPIA5AOIB9AJJulAKIeAQBKcooq2HyCwg4CAmhIGHo8cCiSUvS0AOYQSKRECJhoJDoAXPIQEACMMhB+gcEhELSVEABMde0AIr7+QaFeAIIhIUMAmhAAjkwl9Gg68pVucFhlECtr9RjaekhwOjr0ouiW2sgkcABu2HjYxiSpJAh0CRBwPDi4uhACcGbYLJfbC0Qw7NhYZAYOowOw2WgYFAUAA0Xx+fwBeSIhwWECI6WBeUuV3oAIsWB0yXCIGAYDA6B2WgAvBAAKwAbjAwGAeNRoggTIAfNpaGZ6Ak9ACeFksrk7tY6NlsAAKLICFBMI43ACUXJ5AGsBcKrvjZmciGYLNcSoTyDkopcEHizqI9RAAgZCqhsDM5gs3QzprMSPM9CyANrh6qo9qo6oABnjAF1UeHY2y44mUxBwwBmVEAFkzyaTnMDvpDuIjadRADZUQAObN51Gs1EAdmb0YgDbjzbbEAAnHHWUnS3TohoRKRyNQ6IwWGxNMraKiK6HtRAAN6QKoQbn1BjsfH0ABe2EcYp4PBKaEEF7IlDO+rQiRw5AEho+IoENiKCMWPcIEDK8eCGR8KAFFo0CkCBwNnFcIAAahqbUZGldJlXjbVOV3KoDyGJBUEg+VQNve88Qg4C4GycVeDgEh9CIARcCDEoKDwtjKx0dCGICZjcGVddsCFbdOKAv5aEpHMiD5VF9STKDhNwoCgIPGgSENeVKVIHZv3lNU-zvDBxL3UD4MocMiEUpCWX1FTVPwnkNK01Q7ytT4DMEIyEQgZV+RQ6pNwwKxKTgJBCTQa8THBHgsEYrIAQMMRTKqehPn85CaggAAeFlaE3HdHMc8yIPDAKakUgBaOzOWKiAAF9OIanC6TUnkADFEsJF4DHoBAmCdE0NWwURIIEfEBEXdgckJJAbGlZKdEGzjA16gA1U0RIgeM6r3QMprIYzNpGqDds4p4-MDegoOqdltFy-L7voJCkMK1LfjhY6tuQllStncN6HHer0r8w74QwE6zWFDatve+qgNh06WXB76Rr2xymqAprOJsDA7C0JHZk5HHJJ0NI0BkSRsmVGdKBoBhmFYWIVzXYMN1aoA
 *  Note: It is possible to improve the performance of this code in the next attempt. Currently, this code passes all the provided tests.
 */

let n = 5;
// a, b => indices defining the range (inclusive)
// k => value to add over the range from a to b
// Example queries
// let queries = [[1, 2, 100], [2, 5, 100], [3, 4, 100]];
let queries = [[2, 6, 8], [3, 5, 7], [1, 8, 1], [5, 9, 15]];

function arrayManipulation(n, queries) {
    // Initialize a difference array to keep track of increments
    let diffArray = new Array(n + 1).fill(0);

    // Apply the difference array logic for each query
    queries.forEach(querie => {
        const [a, b, k] = querie;

        // Mark the start of the increment
        diffArray[a] += k;

        // Mark the end of the increment (b + 1) to stop the effect after index b
        if (b + 1 <= n) {
            diffArray[b + 1] -= k;
        }
    });

    // Find the maximum value by calculating the prefix sum
    let maxValue = 0;
    let currentValue = 0;
    for (let i = 1; i <= n; i++) {
        currentValue += diffArray[i];
        if (currentValue > maxValue) {
            maxValue = currentValue;
        }
    }

    return maxValue;
}

console.log(arrayManipulation(n, queries));

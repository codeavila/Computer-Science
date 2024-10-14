/*
 * Complete the 'lonelyinteger' function below.
 * URL => https://www.hackerrank.com/challenges/lonely-integer/problem
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY a as parameter.
 * Run Code Online => https://www.typescriptlang.org/play/?#code/PQKgUABCEMIPYFsAOAbApgFzRDALbA5CnAHZooCeAliVgOZoBOBEAZgK4kDGGVpEAI3JwA7gDpI4KBAAq+Npx58SEKgGcIaAB5I0PNABMccCI0ztGKgIYqAkgDkZAUQDiTgEoTpc7B269+Ky4uNCQMDQdnN3cAfQBBd3c4gE0IKzSNJCtGKwRMJi8QYDAwdAwINQwDGggAXggAbQBWABpWgCYWgGYW9oBdAG4SvyV+YjJKGnomAAorAEoIAG9ICDXgYAgAdUYqLAgKOAsILjgDbHwzVbWyiHQSOlwMGOycijq0sXu6PCG1m8wJ3GaBejDeHysf3+twwyBidQADFCAeVgZQPkjrp8EFYkDMSOwEEJGHUAHzLLH-E6kNRwdBfOB0GYEAlEphkiAEADUrOJ82RVKBpBBrysFDEOLxEF5THhtXJK0FSupJFp9OITJZhOJcvJ3JljBi-MpyqorHx2vZtXqBqNiuVDthSBiXK5AodAF8TWsPfNvSq1WgGZqnbrOVzQ8aHWaZqG6vUAIzze0Om7C9E2y2Md3-L2OuEYgW+kpUswYCwqNEUIZesCnVV0oMamZVqZoBiMGaVaokebGoA
 * Check attached imaged Lonely Integer.png
 */

let stdin = [5,5,2,3,2];

function lonelyinteger(a) {
    // Write your code here
    let clone_array = a;
    let tmp_ =0;
    let lonely = 0;
    a.map(number => {
        console.log('number => '+number);
        clone_array.map( number_ => {
            console.log('number_ => '+number_);
            if(number == number_){
                tmp_++;
            }
        })
        console.log('tmp_ => '+tmp_);
        if(tmp_ == 1){
            lonely = number;
        }
        tmp_ = 0;
    })

    return lonely;
}

console.log(lonelyinteger(stdin));

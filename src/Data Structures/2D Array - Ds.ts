/*
 * Complete the 'hourglassSum' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 * Run Code Online => https://www.typescriptlang.org/play/?#code/PQKgUABCEMIPYFsAOAbApgFzRDALbA5LnAK4BOA5igIYDOtAyiQgRAGYkB2AxhgJZxOEAEZoUcAO4A6SOCgQAKvnZdeAoX1oQ0ADyRpeaACY44EMpnJDqQgJIA5BQFEA4k4BKM+Uuwce-QQhqbm40JAwtACYAEQB9B2c3d1iAQXd3FIBNILIyIK0kajJqBEw0Mi9ody5YOCNsAHlOFD5ObABeAD4IWVh8bgBrIIwMYPwTPgRqCmMeqGAwMGBgCAgnHRLUNCWVgEYIff2ABggjndODi5Oz5cvDq-PriEiIABY3x6vn08XbgAlSJQaPQIC0sMUULRztQRBBuOdVkZzr4IBRfituP0hmgxqC+ODqJCIEg4LR8epoRB2jkyABtPgAXVpACsGedhFSafSmcyANS7Nm3bicop0xks3mRQUrEzU0X0-k8xXIkW5BVSlnS9iqsWSpUC84UHXqpVSxboDA0zm0yCrCC03YAGgOzqdp2dRw9DMdttWtM9LvdQYDR29vvtbsjHujpzDdvtIedkWdrxTXp98f9MYDyeDcbtWaDbtzqdjtoZAG5bYs-GpAsRyFQ6IxmAAKUUASggAG9w7cAOpkfHYACegLhdWw+As4YtECmOlitGYnKOVfjc+45AsnAwS5X1LXs8wQUdwkd3EdRkdaEdbEdFCr4bYcDIrbnzPaa4gzIgAB5qQAZgrH9eV5Dte3jeMXzfOc+C-EC+H-dpgL4MCIPDKC7RhOU1XFVlMKw2FcLFfU2SIqDhRI7kJTNCj41lLk0IFCUDXou0OiYvVNUIrC2GNNCNT5Nj2NRATuL5M1eKg6T4y3XI0F3fcEBFXlhF5bheSMXk0F5NheUfWS7VbBdlOQuFt0UvdlwQLsAH552oRcbPaeSd2slcAC5HOc5h2lMmz1yIgBfcNQvDCwMCsHzlKrcLuEEWg4HQKRxAoVsGyBZsmAQdtcg7DsKyAA
 * Check attached imaged => 2D Array - Ds.png
 */

//  Example
// 1 1 1 0 0
// 0 1 0 0 0
// 1 1 1 0 0
// 0 0 2 4 4
// 0 0 0 2 0

// Hourglass literals
// a b c
//   d
// e f g

// check each literals position
// a = arr[i][j]
// b = arr[i][j+1]
// c = arr[i][j+2]
// d = arr[i+1][j+1]
// e = arr[i+2][j]
// f = arr[i+2][j+1]
// g = arr[i+2][j+2]

let arr = [
    [1, 1, 1, 0, 0, 0],
    [0, 1, 0, 0, 0, 0],
    [1, 1, 1, 0, 0, 0],
    [0, 0, 2, 4, 4, 0],
    [0, 0, 0, 2, 0, 0],
    [0, 0, 1, 2, 4, 0]
  ];
  

function hourglassSum(arr) {
    // Write your code here
    let max_sum = 0;
    let current_sum = 0;
    let a,b,c,d,e,f,g;

    for(let j=0; j <= 3; j++){
        for(let i=0; i <=3;i++){
            a = arr[i][j]
            b = arr[i][j+1]
            c = arr[i][j+2]
            d = arr[i+1][j+1]
            e = arr[i+2][j]
            f = arr[i+2][j+1]
            g = arr[i+2][j+2]

            
            current_sum = a+b+c+d+e+f+g;
            (max_sum <= current_sum) ? max_sum=current_sum : max_sum=max_sum;
        }
    }

    return max_sum;
}

console.log(hourglassSum(arr));
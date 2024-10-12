/*
 * Complete the 'birthdayCakeCandles' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY candles as parameter.
 * 
 * Run Code Online => https://www.typescriptlang.org/play/?#code/PQKgUABCEMIPYFsAOAbApgFzRDALbA5AEYCWATngCYCGAnjNQNZoMB2l6AzgRAGYCurAMYYScVhCJoUcAO4A6SOCgQAKvj6CRYiSU4Q0ADyRoRaSjjgQymfmQnUJASQByqgKIBxdwCVFK9WwBYVFxCGohITQkDH1XD28fAH0AQR8fFIBNCCFHDjR9an0kajJqBEw0Mn8QYDAwIXFODHCyMtok3OZOvK4IAF4IAG0AZgAaACYxgEYxkYBdAG4wdBaMahQuFsGABmXVnLhBDB72dAGIPfqwYO0w0gpcGnomFl6CgApcs4KASggAN6QCAg4DACAAdTIJCwEFoRzIh0o2HwNmBIPROXenHkCGoSA+X3e-36AD5AZiQSCSLwPutNgUWgAeQbffK-IFUrnc+lbC5s9DLblUgC+mJFv0xAoKuPxhOlJPJnOFEBpdI2fP6rOJypVVMax1O+QA1MahSqxVyJVKmnB0PIZABzD4AIlUGsZEFY-AQUkReggLuNvMZkq5NgwdgkBtYJ2lyzFDVt9qdHweVDoDGYbHynA+pXaPW60s4v1+iyAA
 */

const array_cake_candles = [3,2,1,3];

function birthdayCakeCandles(candles) {
    // Write your code here
    let tallest = 0;
    let count_candle = 0;
    candles.map((candle) => {
        if(tallest <= candle){
            tallest = candle;
        }
    })
    candles.map((candle) => {
        if(tallest == candle){
            count_candle++;
        }
    })
    
    return count_candle;
}


console.log(birthdayCakeCandles(array_cake_candles));
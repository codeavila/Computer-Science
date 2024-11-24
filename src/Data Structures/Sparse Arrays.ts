/*
 * Complete the 'matchingStrings' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. STRING_ARRAY stringList
 *  2. STRING_ARRAY queries
 * Run Code Online => https://www.typescriptlang.org/play/?ssl=28&ssc=50&pln=1&pc=1#code/PQKgUABCEMIPYFsAOAbApgFzRDALbA5AgIYYDGuAlgHYDmAyhgE420DOBEAZgK7VkZKcahABGaFHADuAOkjgoEACr5ufAUJGU2ENAA8kaAWgAmOOBCaYeTEcREBJAHJKAogHFXAJQD6AQS8vPwBNOUUVbF5+QWEIYjIyNCQMHS44FEkpVggkYiZiBEw0JjYALnkICABGGQh6JS9nd39AkIg2ZlYAGW0MCogAJlr6xqdmgKDgiABHHmLKNDZ5YDAwdAx2zroejogAXggAbQJiUWICABoCM7PLk9urvQAvPVECAF0AbjXMGbmWRb7I73c6PF5vK6nD6rKIaWIkchUOiMFh0NgACg6qNoOwwFz+80WAEoIABvSCVCDAYAQADqLCwEAAnnAbBAyHATNh8FYKZV1uzWdQNgcAAzfSkQAWsjBIHgYPxMJhAw5fPkEgFsGQkJDojVM-YAPjJ6slaSY6IFlCB4og1oAPAcsd1ejJ0HQ8BBPnaANQ+onkyVBynO7a9Q6Ud77A6zYoGgD8gr4GD9EFKEAIBAlwYgAF9TZSZXKFUqZHK2Lh0Rzk0Ts8Hq8KbXW80TVpKrBgbCIi-LFUxvvmwBzqGx0mg3XBaOiERRWCjWBjQzjehdY5qibWgA
 * Check attached imaged 
 */

let stringList = ['aba','baba','aba','xzxb'];
let queries = ['aba','xzxb','ab']

function matchingStrings(stringList, queries) {
    // Write your code here
    let count = 0;
    let outputArr = [];
    queries.map( query => {
        for(let i = 0; i <= stringList.length ; i++){
            stringList[i] == query ? count++ : '';
        }
        outputArr.push(count);
        count = 0;
    })

    return outputArr;
}

console.log(matchingStrings(stringList,queries));
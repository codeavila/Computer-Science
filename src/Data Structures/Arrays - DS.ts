/*
 * Complete the 'reverseArray' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY a as parameter.
 * 
 * Run Code Online => https://www.typescriptlang.org/play/?ssl=21&ssc=17&pln=1&pc=1#code/PQKgUABCEMIPYFsAOAbApgFzRDALbA5AE5oBuaRAzmgIJFECGAngRAGYCuAdgMYYCWcLhABGaFHADuAOkjgoEACr523PoOH9KENAA8kaPmgAmOOBBIYORYQ2EBJAHKKAogHEXAJQD6NT55oATVkFZWxOXgEhCAYeHjQkDG0nVw8fPwDAmJjtJAZGBEwKEJBgMDAeIUoMbIBeCABtAEYAGgAmFoBmAF0AbnKI9WiScipaemYACgYASggAb0gIZeBgCAB1In4sCCY4awhK42x8EiXl9BqMZAh6hr7z9jgiScuIfluY6XQuAHM8CAAWggTV67wgAD56gAGMH8QGAmaLZYolGrQ5VODob5wX7TBr8bozfqo1HXJDSJAcSi4fGE4mPAC+5VRlS4lCxaBxePJDOZYBGFGodEYTGmxKAA
 * Check attached imaged 
 */

const a = [1,2,3];

function reverseArray(a) {
    // Write your code here
    let tmp = [];
    for(let i = a.length - 1; i >= 0; i--){
        // console.log(a[i]);
        tmp.push(a[i]);
    }

    console.log(tmp);
}

reverseArray(a);
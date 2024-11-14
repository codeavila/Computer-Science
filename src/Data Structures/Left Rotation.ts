/*
 * Complete the 'rotateLeft' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER d
 *  2. INTEGER_ARRAY arr
 * 
 * Run Code Online => https://www.typescriptlang.org/play/?#code/PQKgUABCEMIPYFsAOAbApgFzRDALbA5AE5wYCGWAMmgGYYEQ0CuAdgMYYCWcLEARmhRwA7gDpI4KBAAq+Rqw7denAM4Q0ADyRoOaACY44EIpiZFeZXgEkActICiAcXsAlAPoBBFy48BNcVKy2MzsXDwQZGxsaEgYajRwKELCnCwA5hBIZERkCJhoRCoAXBIQEACMohC2Ds4uEHqlEABMVTVOrp7efhFERBLAYGBsPCoYDRAAvC0A3MOj49lEUxAA2uUANM0bAMwbACwbAKwAukMhiuEk5FS0GAAUehu9RACUEADekGUQwMAQAHUiJwsBAAJ5wMwQEZ6bD4ExDH4QdDjDDIFZLOZIlEQBBwABuaDcgjQeRYcRWaKQohUKE40XuAAYNnpXlifjiWGhhG4lpTkDS6QynktROh0ng2d8yjjrhQiXzpqsTuyynKsLy+qIkEwVLh7qJDRAuTyllKkeqFVqdXqDUa8YTiegyXEpdLoaNEmgxXA0vcCNJSUg4DkUBAPH0yGCpgA+CAEADUVPNPxGLBUXp9foIAFkCdgSS61JM44mHUTC2hySoU2U0xn0Fn-TZueHI9GS-GEybNW9VR705mhNmAGKpMhhiM5aMAWmMpHl1Dosa7lt7boAvkNLUuHiK+mygA
 * Check attached imaged 
 */

const d = 2;
const arr = [1,2,3,4,5]

function rotateLeft(d, arr) {
    // Write your code here

    let tmp = arr; 
    let move_elements = tmp.slice(0,d);
    let new_arr = tmp.slice(d,arr.length);
    let rotate_arr = [];
    rotate_arr.push(... new_arr);
    rotate_arr.push(... move_elements);

    console.log('Temporal Array => '+tmp);
    console.log('Move elements => '+move_elements);
    console.log('New Array => '+new_arr);
    console.log('Final Array - rotateLeft => '+rotate_arr);

}

rotateLeft(d,arr);

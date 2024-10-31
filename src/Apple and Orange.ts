/*
 * Complete the 'countApplesAndOranges' function below.
 *
 * The function accepts following parameters:
 *  1. INTEGER s
 *  2. INTEGER t
 *  3. INTEGER a
 *  4. INTEGER b
 *  5. INTEGER_ARRAY apples
 *  6. INTEGER_ARRAY oranges
 * 
 * * Run Code Online => https://www.typescriptlang.org/play/?#code/PQKgUABCEMIPYFsAOAbApgFzRDALbA5AMZwCuAdhgIJKpoDOV5AJgPIBOAhuQOYMEQAZhSIYAlnHIQARmhRwA7gDpI4KBAAq+ISPGSInIkTRIM9IXBTyFY3hCScuCTGnb0AXKogQAjEogAkgByGgCiAOKhAEoQ9F4QAEz+wWGRMRjxAMzJIRHRBvEALDmp+dLxAKwleVEA+lRRUVQAmga06HHqEABs1Wn1jS0QcFy8DKrAYGDoGLEQALyJANwQwMAQ6IKzSHC2s7hk9GjTmDgLEJkraxDsYjy427uUEAekRyeznOc+V+sY7GhsJx2tgdvQxHpyB8ZOcKr8cADsCNuHx7HBwZDoQhvvDmGJ6BhuMY2nQINCpIsfqt1niCUSkaM+NDgXRzIsANoJAC6S2hyLGbIg7IAtNzeWASBRqCDGCwOCiGAAKegAGgwKs4KukGplKv5fHoAEpxWBhORRBIpJLKDRWUw2IylaqcCqDK7tSSOq79QxDRAAN6QbzUiAAdVuWAgAE8yOwICRmNh8ACg95UyGYADOJGvo4uFGFgA+AxZl6HY7BjanPOcKO1V5HWqONCcRaOqjsfPKtXG9MzT1oWr-QFNzu185ETgoIikFDZtAAMXYpAhHfzto6is1LI6vcr-Z9Q8Ro-zE6nM7nWCXK+oY6j8rGiu1PqNvMr6ZI5HoljQSnkPEVSQOxbAAJcstxBI8RxrKMNTvety1HFtDT3YNP2-dA-zgACgKzMC3jQQDHSgwcYLg-MEIIpDOBQ8UAF8pjNC19HbO9lUJdh1TQFhDUDfdTgwZAT3zeZ2R5dNBBGCB2McDAVjpTiIAAHkWbjmHkjiMAAai03j00rQSkGE2slCQN5cBkzjUO8BjKwBDBSHYKRDOMqNeQY01dEteNz1nedr1XO8NyVMEIUtV0YJIvT+NmFyYNE8TK0i4dfwQYFFUEZcISLAN9ODOK71M8zFVCyEIC0oQsowayIDow103sxznKEmD3MYrz9Enac-KvKq11rB8+BK9EwskCL4JS6Lg37AqRLEt9g2SxElDSpAMqqnK+MrfKWsKsz6As0rvIqzKbxquqGswJqcF2-M2s880ytw0DwKWkcAXoWd1RLCjm04Sijim7wZqEj6vvmAAGBbvDewcwZQDAVvSiE0GxeZiy27aIDEQQt3gv6Ad-WwiBQUhE3oRUUYQFDMaxnajPh7StOh7bbODC67KupyboZhgvvcoA
 *   Check attached imaged Apple and Orange.png
 */

let s = 2; // left point house
let t = 3; // right point house
let a = 1; // tree apple position
let b = 5; // tree orange position
let m = 1; // distance apple 
let n = 1; // distance orange
let apples = [2];
let oranges = [-2];

countApplesAndOranges(s,t,a,b,apples,oranges);


function countApplesAndOranges(s, t, a, b, apples, oranges) {
    // Write your code here
    
    // Create a array => area house
    let array_house_area= rangeArray(s,t);
    let apple_tree_array = calculateFruitArrayApples(a,apples);
    let orange_tree_array = calculateFruitArrayOrange(b,oranges);
    
    console.log(onAreaHouse(apple_tree_array,array_house_area));
    console.log(onAreaHouse(orange_tree_array,array_house_area));

}

function rangeArray(start,end){
    let tmp_arrray=[];
    for (start; start <= end; start++){
        tmp_arrray.push(start);
    }
    return tmp_arrray;
}

function calculateFruitArrayApples(position, array_tree){
    let tmp_array=[];
    array_tree.map(fruit => {
        tmp_array.push(position + fruit);
    })
    return tmp_array;
}

function calculateFruitArrayOrange(position, array_tree){
    let tmp_array=[];
    array_tree.map(fruit => {
        tmp_array.push(position + fruit);
    })
    return tmp_array;
}

function onAreaHouse(array_tree_result, array_area_house){
    let tmp_result=0;
    array_tree_result.map(item => {
        if(array_area_house.includes(item)){
            tmp_result++;
        }
    })
    return tmp_result;
}
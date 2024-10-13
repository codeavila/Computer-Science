/*
 * Complete the 'gradingStudents' function below.
 * URL => https://www.hackerrank.com/challenges/grading/problem
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY grades as parameter.
 * Run Code Online => https://www.typescriptlang.org/play/?ts=5.6.3#code/PQKgUABCEMIPYFsAOAbApgFzRDALbA5AOYBOAhgCYCWAdkQMoYCuFaNGAzgRAGZM0BjDFTg0IAIzQo4AdwB0kcFAgAVfL35CRYqhwhoAHkjRC0FHHAglMTEmLJiAkgDkVAUQDibgEoB9AILe3v4AmgrKath8gsKiEGQCAmhInBAu7l5+gcEhEKSUaHpkekhk5AiYaCThIMBgYOgYeeSsegC8EADaABwALAA0AGwA7P0AzN3jYwC6ANwNmM0FHABuYxAdnQCcg3MLTfmtKwBMG13dAAz9O-0AjJPDY-3Dk4NXb3cArP2937d-V2+vUG-W6ozGTw+twGw1uQ2+x363y2owu0zAwGAhmMpnMEHx+Mu1xB92e3yJHyhQL+AKRPxBYKmQyu0OecMGCLpKP6F3qjV4tDIKF8h2wmz2YGiWjih1oDGYrHYHAAFKKOABKCAAb0gBMxEAA6iQqFgIABPOC2CACOCsCD4az1AlLVpyBBkJCqlpigB82t1zvxPEFwtFciQTA4uGVJEtNAoHm9XoK6vV82dAF91U6CdZmHYBTQhSLvfMM-VJZpYmJY-wE0nReqdc7+dZ3bRWCQzkRMN40O341Vk6w0wGIGOqDxh9gADwQCZNsfOvO2MSi9ME8vOidTttkDtVDYdC6LwO5mwF9djrcEncQGP9-eDrsAQmPp7PEH5NEMGF8CCYFBhFQM0zk+CAAForEfA8SA3M9WzjCgSwKbtvQAah-Aw-wAoCqBA+DAyXAlJ3vGMkJQu0oMbCA5zGD9P3PfMawoq9GJvM9J2Vci60o7BqO9TU2g6ejm0YpjVxdNBCMzYj8S42t4z4yCpIgP1RLkwMV0vUtNI4iB9LActKxibQ8l7GDn2VGgmAQSQSD4hjoOY+8bLsqo+IAUk+UdjJtGgODgdA5GkIhhzlRgWDYThp1WY5U3qUAwGgAAhSgIBkMhQIwSxApQFY0H6CBI2wd0sDKqgBA4ZK6hM6UWLrRMCl8GQ4BIDgMGnJz+VFXw2zgArfFYJIizQgo5ByxhjToZV1TkDhUBNZUCAIUdNK40VaPnbonMY7S1109ic04qdVOEiBbguE8xPE5zJLYz9jOdLjSnatBHHYac+v7Aa0CGkw2DITpbmmTUZw6HybsDb9f3-QDgPQM5Xo4d7Pt6-rBuGwHOjRdCCE+VaZJIqdrNh3CEf4qSwfnXbP32iAsJw+H8PQIn8QzKQUYgLjSewuG8NQSmaPOjTbvxemHrPfSOZQFGoZbRZGf5imkbKFGPs65VkdRzr0Z+zGAaLHHQfQ245smjBprC9U8YuQn1pJpXyZZoXBKPGn5bpi8DoKNmDM5tBPbPemneZwW-el47uanbWNa+jG-qxo2QaE48IFp8XvakwjywzIA
 * Check atached imaged Grading Students.png
 */


let grades = [84,67,38,33];
let gradesv3 = [96];
let gradesv2 = [80,96,18,73,78,60,60,15,45,15,10,5,46,87,33,60,14,71,65,2,5,97,0]
//expected      80,96,18,75,80,60,60,15,45,15,10,5,46,87,33,60,14,71,65,2,5,97,0

let final_grade = [];

function gradingStudents(grades) {
    // Write your code here

    grades.map(grade => {
        final_grade.push(roundGrade(grade));
    })

    return final_grade;
}


function roundGrade(grade){
    let setModulo = getModulo(grade);
    
    if(grade < 38){
        return grade;
    }
    
    if(setModulo == 0){
        return grade;
    }
    
    if (setModulo != 0){
        let next_multiply = 5-setModulo;
        let round_grade = grade+next_multiply;
        
        console.log(round_grade);
        console.log(grade);
        console.log(next_multiply);
        
        if ((round_grade - grade) < 3){
            return round_grade;
        }
        if((round_grade - grade) == 3){
            return grade;
        }
        if(round_grade - grade > 3){
            return grade;
        }
    }
    
}

function getModulo(number_grade){
    return (number_grade%5);
}

console.log(gradingStudents(gradesv2))

/*
* Bad way to solve, use matematics
*/

function roundGrade_worst(grade){
    let grade_remove_decena = grade.toString().split('');

        if(grade < 38){
            return grade;
        }

        if( grade == 100){
            return grade;
        }

    if(parseInt(grade_remove_decena[1]) <= 5){
        let next_multiple = parseInt(grade_remove_decena[0]+'5');
        if((next_multiple - grade) < 3){
            return next_multiple;
        }else if((next_multiple - grade) == 3){
            return grade;
        }
    }else{
        let next_multiple = parseInt((parseInt(grade_remove_decena[0])+1).toString()+'0');
        if((next_multiple - grade) == 3){
            return grade;
        }else{
            return next_multiple;
        }
    }

    if(parseInt(grade_remove_decena[1]) == 0 ){
        return grade;
    }
}
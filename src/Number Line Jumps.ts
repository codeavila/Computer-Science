/*
 * Complete the 'kangaroo' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. INTEGER x1
 *  2. INTEGER v1
 *  3. INTEGER x2
 *  4. INTEGER v2
 * 
 * Run Code Online => https://www.typescriptlang.org/play/?#code/PQKgUABCEMIPYFsAOAbApgFzRDALbA5ANYCGAdgOYkBOccBEAZgK5kDGGAlnGRAEZoUcAO4A6SOCgQAKviasO3XpwDOENAA8kaDmgAmOOBGqZm1XiQgBlaQCUAkgDkA4uKmzsLdlx4QSbNjQkDDVGOBQhYU5KCCQaEgRMNGoVAC4JCAgARlEIJ2kAUWcC2wgNLIyIACZc-KKSiAA3CqkIAGZax0Li0o0qyoAWTu6Gxv6oYDAwdAwyrIgAXggABgBuCGBgCFJKGjoIAA15hYA+WLgVTh8yacwm4+r1zYgAKWZkbfIqWiMANWOztE2CYSCo0AhZgBqSG3WZ9RYQACsTy2O2++wO-RmTSqCLaKNe7yQn12Pwgv36YC8il8aL2cAA+owSJwUAAKcoAGnu3L63LGAEoIABvSCZDZbADq1Cu2AAnnAzBA2HA9Nh8CYpuKJZtdXr9QbDYaxZlngAxey2GwQACCAAVbAB5G0wAASEAAtBAzTb7AAZACqtgKJp1RvDEYNWvF2M4CFdyTQzVWodj8cTYxToZVZBU4TQoiEFDZcYTJmaC3KkIWzQFKe1Obz6ELcGLpYzWUrWWrtfr4sb+ZbbfT5c7VZrWTr2Z4TYLRZLI6TY+7E6nDZng-n7dHXZ7k77mQHzfnACIPeeTwLp7nN62F2Wk1VK1Ue1U1-2N8e79vH8-X+-D0-Odv0XMY-xrN8D2VICh3vDMnz6f8oKPYDhwfMDEIgqdQ2ePQjFFbVnm1H8K3HZocK2YjQIQl8IIoiAAF8IGEXBWWwODRwgABCJYSMgqZ6JQ2CSP3QSYK3aiAIgUNOEYDil0WXjJII7VxRMDAzF4E8AE0CisE9QyYwQwRU1TjFMcwIBPRxHQM7UGNDKYHKpBRrhJdE4A5LJ+W8soqn5N8RQoyMQsjeiAysJxnAgABZG1pFdKxPQgAAhNAVFmYQSDlFRgtC-Ko21UNMlkiA2S8iAAB4-IgAAyWr7iqpZBQgAAfVqyvharyjqhqxia+4BSFUzVPUzSrJsk8oIcoriMYMqOVxL1yiFABSMrmmSlqFiWZZhuKtSLK03T9Om9QUDBIKzMyMbLOs2yzvFJyBKE+c6R+LzOWaTk+UFOsgA
 * Check attached imaged IN PROCESS
 */

let x1 = 0; // kangaroo X1 => position
let v1 = 2; // Jump kangaroo V1 => increasemt ++
let x2 = 5; // kangaroo X2
let v2 = 3; // Jump kangaroo V2

function kangaroo_fail(x1, v1, x2, v2) {
    // Write your code here

    ////////////////////////////////////
    // FIRST APROACH - FAILURE
    ////////////////////////////////////

    let imHerev1;
    let imHerev2;

    console.log(imHerev1=x1+=v1);
    console.log(imHerev1=x1+=v1);
    console.log(imHerev1=x1+=v1);
    console.log(imHerev1=x1+=v1);
    console.log(imHerev1=x1+=v1);
    console.log("---")
    console.log(imHerev2=x2+=v2);
    console.log(imHerev2=x2+=v2);
    console.log(imHerev2=x2+=v2);
    console.log(imHerev2=x2+=v2);
    console.log(imHerev2=x2+=v2);

    // do {
    //     imHerev1=x1+=v1
    //     imHerev2=x2+=v2
    // } while (imHerev1 != imHerev2);


    // console.log(imHerev1);
    // console.log(imHerev2);
    
    if(imHerev1 == imHerev2){
        return "YES"
    } else{
        return "NO"
    }
    

}

function kangaroo(x1, v1, x2, v2) {
    ////////////////////////////////////
    // USING MATHS - Best ways
    ////////////////////////////////////
    
      if ((x1 < x2 && v1 <= v2) || (x2 < x1 && v2 <= v1)) {
        return "NO";
    }
    
    if ((x2 - x1) % (v1 - v2) == 0) {
        return "YES";
    } else {
        return "NO";
    }    

}


console.log(kangaroo(x1,v1,x2,v2));
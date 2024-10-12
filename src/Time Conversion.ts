/*
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 * Run Code Online => https://www.typescriptlang.org/play/?#code/PQKgUABCEMIPYFsAOAbApgFzRDALbA5BgJYJrwB2AbmgE4DOxcFBEAZgK4UDGJzEAIzQo4AdwB0kcFAgAVfOy68mFCMXoQ0ADyRpeaACY44EWpg61VAQwgBlWQCUAkgDkA4pJnzsnHn2vc3GhIGBr2zu4QGlYaSFa0VmRYtJ4gwGBg6BhRGAbEqgC8EABEAAwALABcAKwAnDW1AIIAssUA3JmYOXnUAEwQBcUAjL2V5dU15QAKrR1gvsr8JGSUNAwqABT0AJQQAN6QEEfAwBAA6rTEWBAAnnAWENxwBtj4ZofHp08U9HDo4iIAOZbbYdI6fR7MX7-IEbDA3XRwNgg0EfCBZKKoK6yUjYIr0cT0LEYDbFSrFVHgyE-P5oAFwYFElDY3GU8EY3D3BgDCBxBhoJwUElMllkADapQAumyjhiEPkOFgNPjiTjxUNJWD2V16HpmAZlZjmRg1Wgxb1JeIzKgrEFSS1igAaYoUq3BFC2tCkmZOl0yiBo4jIgn5bgoDgveje1q7ABksYgnIsyqKIwg2wOVKpZgwFlUw16xQA1GTi-KKIq0PQS+Si7rvgatUcAL6B4PiUPhyPRikZtHZ8yWCAbJMMIsjbY1ssKpVTut6iiNtGtqlBrYdnhdqv2mMQeOJrkaAA8RVqfaz4JzeZKpWLo+rpaL5crD9r9f19CbEBX4LXIc3EbbsUDpxgm94DKmpQQAAPtBB7JhBEBDEMRznhepiDqo95zs+s6Pu+i6fsubbrp2gFRsBu77uBBSpv0aEXleQ5lLeOEzlWc4EUuVKtq2YDfNCdKwss5DMGsjDMFsuT5FQvTbKiQA
 */

let stdin = "04:59:59AM";
let stdinv2 ="12:45:54PM";

function timeConversion(s) {
    // Write your code here
    // console.log(s);
    // console.log(typeof(s));
    let splitTime = s.split(":");
    console.log(splitTime);
    let hours = parseInt(splitTime[0]);
    let minutes = splitTime[1];
    let seconds = splitTime[2].replace("AM","").replace("PM","");
    
    if(s.includes("PM") && hours == 12 ){
        return "12"+":"+minutes+":"+seconds;
    }
    if(s.includes("PM")){
        return (hours+12)+":"+minutes+":"+seconds;
    }
    if(s.includes("AM") && hours <= 9){
        return "0"+hours+":"+minutes+":"+seconds;
    }
    if(s.includes("AM") && hours == 10 || hours == 11  ){
        return hours+":"+minutes+":"+seconds;
    }
    if(s.includes("AM") && hours == 12 ){
        return "00"+":"+minutes+":"+seconds;
    }
}

console.log(timeConversion(stdinv2));

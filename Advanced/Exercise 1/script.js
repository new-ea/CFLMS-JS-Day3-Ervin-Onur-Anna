
function convertTime(minutes){
    let hours = Math.floor(minutes / 60);
    let rest = minutes % 60;
    // return `${minutes} =  ${hours} hour(s) and ${rest} minute(s).`; 
    return minutes + " = " + hours + " hour(s) and " + rest + " minute(s).";
}

let out = convertTime(200);
console.log(out);

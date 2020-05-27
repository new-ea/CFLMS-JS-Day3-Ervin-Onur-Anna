function converter(degrees){
    let pi = 3.14159;
    let res = degrees * (pi/180);
    let output = `Your result is: ${res}`;
    return output;
}

let out = converter(90);
console.log(out);

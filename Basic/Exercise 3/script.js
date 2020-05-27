function ageCalculator(birthYear){
    var currentTime = new Date().getFullYear();
    let res = currentTime - birthYear;
    let output = `Your age is ${res}`;
    return output;
}

let age = ageCalculator(1990);
console.log(age);



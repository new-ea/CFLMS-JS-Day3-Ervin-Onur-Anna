function ageCalculator(birthYear, currentYear){
    let res = currentYear - birthYear;
    let output = `Your age is ${res}`;
    return output;
}

let age = ageCalculator(1991, 2020);
console.log(age);

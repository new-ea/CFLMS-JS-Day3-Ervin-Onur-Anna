function grades(math, physics, english){
    let sum = math + physics + english;
    let average = sum / 3;
    return `The sum is ${sum} and the average is ${average}`;
}

let res = grades(3, 4, 5);
console.log(res);

//Date Format must be like "May 27 2020"
let dateTime = function(currentDate){
    const today = new Date(currentDate);
    today.setDate(today.getDate() - 1);
    let t = today.toDateString().slice(4);
    return t;
}   

let myDate = "May 1 2020";
let ok = dateTime(myDate);
console.log(ok);






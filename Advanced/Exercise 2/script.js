let dateTime = function(currentDate){
    let obj = new Date();
    let d = obj.getDate();
    let m = obj.getMonth()+1;
    let y = obj.getFullYear();
    let fullDate = d + "-" + m + "-" + y;

    if (fullDate == currentDate) {
        d -= 1;
        fullDate = d + "-" + m + "-" + y;
        console.log(fullDate);   
    }   
}

let date = "25-5-2020";
let test = dateTime("27-5-2020");
console.log(test);




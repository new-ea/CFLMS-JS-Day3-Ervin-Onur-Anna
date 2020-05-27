const str = 'I am a web developer';

let capitalize = function(str){
   let res = str.charAt(0).toUpperCase() + str.slice(1)
   console.log(res);
   
}

capitalize(str);
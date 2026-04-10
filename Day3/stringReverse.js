// 1) string reverse 


// const str = "hellooooo";
// const  reversed = str.split("").reverse().join("");

// console.log(reversed);


// 2) Using reduce() 


const str ="hello";
const reversed =  str.split("").reduce((acc, curr) =>{
   return curr + acc;
},"")


console.log(reversed);

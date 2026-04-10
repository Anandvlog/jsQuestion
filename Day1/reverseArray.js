// reverse Array 

//  1) simple using build-in function
//  direct reverse build-in fundtion use change array direct  


// let arr= [1,2,3,4,5,6];
// let abc = arr.reverse();

// console.log(abc);


//  2)  another way to reverse array Using spread operator
//  this is spread operator method use not change array  


// let arr = [1,2,3,4,5,6,7];
// let abc = [...arr].reverse();

// console.log(abc);

//  3) another way to reverse array Using reduce()

const arr = [1,2,3,4,5,6,7,8];
const abc = arr.reduce((acc, curr) =>{
    return [curr, ...acc];
},[])

console.log(abc);
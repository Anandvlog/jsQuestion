// 1) best way to removed dublicate value 
 
// let arr = [1,2,2,3,5,6,6];
// let uniques = [...new Set(arr)];


// console.log(uniques);

// 2)  Using Map (Best for objects)

// const arr = [{id:1, name:"A"},{id:2, name:"B"},{id:2, name:"B"}];

// const uniques = [...new Map(arr.map(item => [item.id, item])).values()]

// console.log(uniques)


// 3)  Using filter()


const arr= [1,2,3,4,5,5,4,6];
const uniques = arr.filter((item, index) => {
    return  arr.indexOf(item) === index;
});

console.log(uniques);
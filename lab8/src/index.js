const arr = [
    { key: 0, x: [4,5,6], y: [1,2,3,4]},
    { key: 0, x: [1], y: [] }
]  
let sum = 0
arr.reduce((prev, curr) => {
    sum = curr['x'].length+ curr['y'].length + sum
    console.log(curr);
    console.log(sum);
},[])

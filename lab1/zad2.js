const numbers = [4, 10, 32, 1, 54, 43, 21, 43, 65, -43, 5];
let i
let maks = numbers[0]
let mini = numbers[0]
for (i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
    if (numbers[i]> maks){
        maks=numbers[i]
    }
    if (numbers[i]< mini){
        mini=numbers[i]
    }
}
console.log("maksimum", maks);
console.log("minimum", mini);
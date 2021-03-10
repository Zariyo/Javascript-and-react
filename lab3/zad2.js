function numbers(n){
    let numbersstring = ''
    function helper(n, step){
        if (step==n){
            return numbersstring;
        }
        numbersstring += step
        numbersstring += ' '
        helper(n, step+1)
    }
    helper(n, 0)
    return numbersstring
}

console.log(numbers(5));
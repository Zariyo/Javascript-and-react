function sumtonumber(n){
    function helper(m, step, sum){
        if (step==m+1){
            console.log(sum);
            return sum
        }
        helper(m, step+1, sum+step)
    }
    return helper(n, 0, 0)
    
}
sumtonumber(4)
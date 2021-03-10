function outerf(n){
    let number = 5;
    function innerf(m){
        return m+number;
    }
    return innerf(n)
}
console.log(outerf(11));
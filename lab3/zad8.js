
function NWD(m, n){
    if (n>0){
        return NWD(n, m%n)
    }
    else{
        return m
    }
}

console.log(NWD(156,12));
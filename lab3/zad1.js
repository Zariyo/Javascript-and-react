function istriangle(a,b,c){
    if (a>(b+c)){
        return true;
    }else if (b>(a+c)){
        return true;
    }
    else if (c>(a+b)){
        return true;
    }
    else{
        return false;
    }
}

console.log((istriangle(2,3,4)));
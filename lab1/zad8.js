function howmany(anArray){
    let secondArray = []
    exists=false
    for (i = 0; i < anArray.length; i++) {
        exists=false
        for (j = 0; j < anArray.length; j++) {
        if (secondArray[j]==anArray[i]){
        exists=true
        }
        
    }
    if (exists==false){
        secondArray.push(anArray[i])
        secondArray.push(1)
    }
    if (exists){
        secondArray[secondArray.indexOf(anArray[i])+1]+=1
    }
    }

return secondArray
}

console.log(howmany(['js', 'react', 'js', 'angular', 'angular', 'js']));

function mostoften(anArray){
    let currentItem = anArray[0]
    let currentTimes = 0
    let oftenItem = anArray[0]
    let oftenTimes = 0
    for (i = 0; i < anArray.length; i++) {
        currentItem = anArray[i]
        for (j = 0; j<anArray.length; j++){
            if (currentItem == anArray[j]){
                currentTimes = currentTimes + 1
            }
        }
        if (currentTimes>oftenTimes){
            oftenItem = currentItem
            oftenTimes = currentTimes
        }
        currentTimes=0
    }
    return oftenItem
}

console.log(mostoften([1, 2, 5, 5, 2, 2, 2, 5]));
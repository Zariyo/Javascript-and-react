let anArray = [2,3,4,-5,6,7]

anArray.reduce((previousValue, currentValue, index, array) => {
    if (currentValue<0){
        array.splice(index,1)
        currentValue=array[index]
    }
    console.log(currentValue*currentValue);
    array[index]=currentValue*currentValue

    return currentValue*currentValue
},[]); 

console.log(anArray);
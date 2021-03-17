let anArray = [2,3,4,5,6,7]

anArray.reduce((previousValue, currentValue, index, array) => {
    console.log(index+': '+currentValue);
},[]);
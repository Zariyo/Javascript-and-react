let anArray = [2,3,4,5,6,7]

anArray.reduce((previousValue, currentValue) => {
    previousValue=previousValue+currentValue
    console.log(previousValue);
    return previousValue
},); 


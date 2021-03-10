function callfunc(name){
    name()
}

function printthing(){
    console.log('thing');
}

callfunc(printthing)
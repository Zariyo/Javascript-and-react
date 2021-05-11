const lp3 = require('./toplist');
const _ = require('lodash');
const { sort } = require('./toplist');
const { random } = require('lodash');

let QueenArr = []

lp3.reduce((prev, curr) => {
    if (curr['author']=='Queen'){
        QueenArr.push(curr['song'])
    }
},[])

let pinkfloydArr = []

lp3.reduce((prev, curr) => {
    if (curr['author']=='Pink Floyd' && curr['change']>=10){
        pinkfloydArr.push(curr['song'])
    }
},[])

const nRemoved = 4

const firstPlace = {
    name: lp3[0]['author'],
    topsong: lp3[0]['song']
}


function printPlaces(lista){
    console.log(_.isNumber(lista));
    lista.reduce((acc, curr, ind, arr)=>{
        console.log(lp3[curr-1]['song']);
    },[])
    
}

function printRandom(n, min ,max){
    let rand = 0
    for (i = 0; i < n; i++) {
        rand = random(min, max, false)
        console.log(lp3[rand-1]['song']);
        console.log(lp3[rand-1]['place']);
    }
}

function printLoss(){
    console.log(_.filter(lp3, function(o){return o.change<0} )); 
}

//  Wyświetlanie odpowiedzi do zadań
// 1.
//  console.log(QueenArr)
// 2.
//  console.log(pinkfloydArr)
// 3.
// console.log(_.dropRight(_.reverse(_.sortBy(lp3, ['change'])),nRemoved))
// 4.
//  console.log(firstPlace);
// 5.
//  console.log("------------------------");
//  printPlaces([1,2,3])
// 6.
//  console.log("=========================")
//  printRandom(5, 1, 20)
//  7. Nie umialem
// 8. 
//  console.log("=========================")
//  printLoss()
// 9.
//    let newlp3 = {}
//    lp3.reduce((previousValue, currentValue, index, array) => {
//        let newkey=(array[index]['author']);
//        newlp3[newkey]=(array[index]);
//    },[]);
//    console.log(newlp3);
// 10.
//    let lp3tab = {}
//    lp3.reduce((acc, curr, ind, arr)=>{
//        lp3tab[curr['author']]=[]
//    },[])
//    lp3.reduce((acc, curr, ind, arr)=>{
//        let newObj={
//            song: curr['song'],
//            place: curr['place']
//        }
//        lp3tab[curr['author']].push(newObj)
//    },[])
//    console.log(lp3tab);
// 11.
//  let lp3howmany = {}
//  lp3.reduce((acc, curr, ind, arr)=>{
//      lp3howmany[curr['author']]=0
//  },[])
//  lp3.reduce((acc, curr, ind, arr)=>{
//      lp3howmany[curr['author']]+=1
//  },[])
//  console.log(lp3howmany);
// 12.
//  
//  console.log(_.maxBy(lp3, function(o) { return o['change'] }));
//  console.log(_.minBy(lp3, function(o) { return o['change'] }));


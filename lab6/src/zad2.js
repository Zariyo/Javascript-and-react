const lp3 = require('./toplist');
const _ = require('lodash');
const { sort } = require('./toplist');

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

for (let i = 0; i <= 10; i++){
    _.delay(function(text){console.log(text)}, 5000, lp3[i]['song'])
}

//  Wyświetlanie odpowiedzi do zadań
// 1.
//  console.log(QueenArr)
// 2.
//  console.log(pinkfloydArr)
// 3.
//  console.log(_.dropRight(_.reverse(_.sortBy(lp3, ['change'])),nRemoved))
// 4.
//  console.log(firstPlace);
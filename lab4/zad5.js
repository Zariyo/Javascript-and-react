const wishlist = [   
    {  
        name: 'Czajnik',  
        netto: 100  
    },  
    {  
        name: 'Lodówka',  
        netto: 1300  
    },  
    {  
        name: 'Mikrofalówka',  
        netto: 340  
    },  
    {  
        name: 'Mikser',  
        netto: 120  
    },  
    {  
        name: 'Piekarnik',  
        netto: 2100  
    }  
]
const utilities = [   
    {  
        name: 'Czajnik',  
        netto: 100  
    },  
    {  
        name: 'Lodówka',  
        netto: 1300  
    },  
    {  
        name: 'Mikrofalówka',  
        netto: 340  
    },  
    {  
        name: 'Mikser',  
        netto: 120  
    },  
    {  
        name: 'Piekarnik',  
        netto: 2100  
    }  
]

wishlist.reduce((acc, currentValue, index, array) => {
    console.log(currentValue.netto);
    acc+=currentValue.netto*1.23
    console.log(acc);
    return acc
},0)

wishlist.reduce((acc, currentValue, index, array) => {
    array[index] = currentValue.netto
    console.log(array);
    return array
},[])

function zamiana(tablica, funkcja) {
    let newTab = []
    newTab = tablica.reduce((acc, curr, index, array) => {
        newTab[index] = funkcja(curr);
        return array
    }, [])
    return newTab
}
function filtr(tablica, warunek) {
    let newTab = []
    tablica.reduce((acc, curr, index, array) => {
        if (warunek(curr)){ newTab.push(curr); }
        return array
    }, [])
    return newTab
}

function szukaj(tablica, element) {
    let exists = false
    tablica.reduce((acc, curr, index, array) => {
        if (element(curr)) { exists = true }
},[])
    return exists
}

console.log(utilities);
const newArray = zamiana(utilities, x  => x.name + ' ' + x.netto);
console.log(newArray);

const newArray2 = utilities.map(x=>x.name + " "+ x.netto)
console.log(newArray2);

console.log(utilities);
const newArray3 = filtr(utilities, x => x.netto < 500)
console.log(newArray3);

console.log(szukaj([ 'Ala', 'Kot', 'Pies' ],  y => y === 'Ala')); 
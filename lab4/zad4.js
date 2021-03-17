let lista = [ 
    { id: 'abc', name: 'Ala' }, 
    { id: 'def', name: 'Tomek' }, 
    { id: 'ghi', name: 'Jan' } 
]

lista.reduce((previousValue, currentValue, index, array) => {
    newkey=(array[index]['id']);
    const newObject = {

    }
    newObject[newkey]=(array[index]);
    console.log(newObject);
},[]);
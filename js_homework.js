// ejercicio01  agregar marcos y pedro al inicio

let people = ['Steve', 'Peter', 'Mike', 'Nick'];
let add =  ['Marcos', 'Pedro'];
console.log(...add, ...people)

// ejercicio02 unir los dos objeto en uno

let user = { name: 'steve', age: '22'}
let details = { place: 'Romania', hobby: 'Reading'}
console.log({...user, ...details})

// ejercicio03 obtener la variable phone y dir
user = { name: 'pedro', lastname: 'poveda', details: { phone: '457812', dir: 'Calle: 457878' } }
console.log({...user.details})
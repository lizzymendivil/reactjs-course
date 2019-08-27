// ejercicio01 mostrar nombres de elementos que coincidan con las letras 'ohn'

const users = [
    { id: 11, nombre: 'Adam', edad: 23, grupo: 'editor'},
    { id: 47, nombre: 'John', edad: 23, grupo: 'admin'},
    { id: 85, nombre: 'Gohna', edad: 23, grupo: 'editor'},
    { id: 97, nombre: 'Tohny', edad: 23, grupo: 'admin'},
]

const result = users.filter(user => user.nombre.includes('ohn'));
console.log(result);

// ejercicio02 Obtener la suma y el promedio de los valores

const euros = [29.76, 41.85, 46.5];
let sum = euros.reduce((previous, current) => current += previous);
let avg = sum / euros.length;
console.log(avg)
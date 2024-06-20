/**
 * Nombre de usuario
 * @type {string}
 */
let userName = "Cristian"

/**
 * Edad del usuario
 * @type {number}
 */
let userAge = 28

/**
 * Lista de edades de usuarios
 * @type {Array<number>}
 */

const usersAge = [23,24,25]

/**
 * Lista de valores mixtos
 * @type {Array<Number | String | Boolean>}
 */

const mixedArray = [23,24,25, false, "Cristian"]

/**
 * Usuario
 * @type {{id: number, name: string, age: number, isActive: boolean}}   
 */

const user = {
    id: 1,
    name: "cris",
    age: 23,
    isActive: true
}

/**
 * @typedef {Object} User
 * @property {number} id id el usuario
 * @property {string} name nombre del usuario
 * @property {number} age edad del usuario
 * @property {boolean} isActive estado del usuario
 */

const user2 = {
    id: 1,
    name: "cris",
    age: 23,
    isActive: true
}

/**
 * @type {User}
 */

const user3 = {
    id: 1,
    name: "cris",
    age: 23,
    isActive: true
}

/**
 * imprime por consola un saludo
 * @param {User} user 
 * @returns {void}
 * @example
 * sayHello(user)
 */

function sayHello(user){
    console.log(`Hola ${user.name}`);
}

sayHello(user)


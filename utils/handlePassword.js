const bcryptjs = require("bcryptjs");

/**
 * contraseña sin encriptar : hola.01
 * @param {*} passwordPlain 
 */
const encrypt = async (passwordPlain) => {
    const hash = await bcryptjs.hash(passwordPlain,10)
    return hash
};

/**
 * pasar contraseña sin encriptar y pasar contraseña encriptada
 * @param {*} passwordPlain 
 * @param {*} hashPassword 
 */
const compare = async (passwordPlain, hashPassword) => {
    return await bcryptjs.compare(passwordPlain, hashPassword)
};

module.exports = {encrypt, compare};
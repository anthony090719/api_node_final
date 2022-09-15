const jwt = require("jsonwebtoken")
const JWT_SECRET = process.env.JWT_SECRET;
const getProperties = require("../utils/handlePropertiesEngine");
const propertiesKey = getProperties();
/**
 * debes de pasar el nombre de usuario
 * @param {*} user 
 */
const tokenSing = async (user) => {
const sing = jwt.sing(
    {
        [propertiesKey.id]:user[propertiesKey.id],
        role: user.role,
    },
    JWT_SECRET,
    {
        expiresIn:"2h",
    }
    );

    return sing
};

/**
 * debes de pasar el token de sesion el JWT
 * @param {*} tokenJwt 
 * @returns 
 */
const verifyToken = async (tokenJwt) => {
    try{
        return jwt.verify(tokenJwt, JWT_SECRET)
    }catch(e){
        return null
    }
};

module.exports = {tokenSing, verifyToken};
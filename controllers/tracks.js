const {tracksModel} = require("../models");
const { handleHttpError } = require("../utils/handleError");
const {matchedData} = require("express-validator");

/**
 * obtener lista de la BD
 * @param {*} req 
 * @param {*} res 
 */
const getItems = async (req, res) =>  {
    try {
        const user = req.user;
        const data = await tracksModel.findAllData({});
        res.send({data, user});
    }catch(e){
        console.log(e)
        handleHttpError(res,'ERROR_GET_ITEMS');
    }
};

/**
 * obtener un detalle
 * @param {*} req 
 * @param {*} res 
 */
const getItem = async (req, res) =>  {
    try{
        req = matchedData(req);
        const {id} = req;
        const data = await tracksModel.findOneData(id);
        res.send({data});
    }catch(e){
        handleHttpError(res,"ERROR_GET_ITEM")
    }
};

/**
 * insertar un registro
 * @param {*} req 
 * @param {*} res 
 */
const createItem =async (req, res) =>  {
    try {
        const body= matchedData(req)
        const data = await tracksModel.create(body);
        res.status(201);
        res.send({data});
    }catch(e){
        handleHttpError(res,'ERROR_CREATE_ITEMS');
    }
};

/**
 * actualizar un registro
 * @param {*} req 
 * @param {*} res 
 */
const updateItem =async (req, res) =>  {
    try {
        const {id, ...body} = matchedData(req);
        const data = await tracksModel.findOneAndUpdate(
            id, body
        );
        res.send({data});
    }catch(e){
        handleHttpError(res,'ERROR_UPDATE_ITEMS');
    }
};

/**
 * eliminar un registro
 * @param {*} req 
 * @param {*} res 
 */
const deleteItem = async (req, res) =>  {
    try{
        req = matchedData(req);
        const {id} = req;
        const deleteResponse = await tracksModel.delete({_id:id});
        const data = {
            deleted: deleteResponse.matchedCount
        }

        res.send({data});
    }catch(e){
        console.log(e)
        handleHttpError(res,"ERROR_DELETE_ITEM")
    }
};

module.exports = {getItems, getItem, createItem, updateItem, deleteItem};
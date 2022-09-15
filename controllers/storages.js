const fs = require("fs");
const {matchedData} = require("express-validator");
const {storageModel} = require("../models");
const {handleHttpError} = require("../utils/handleError");

const PUBLIC_URL = process.env.PUBLIC_URL;
const MEDIA_PATH = `${__dirname} /../storage`;
/**
 * obtener lista de la BD
 * @param {*} req 
 * @param {*} res 
 */
const getItems = async (req, res) =>  {
    try{
        const data = await storageModel.find({});
        res.send({data});
    }catch(e){
        handleHttpError(res,"ERROR_LIST_ITEM")
    }
};

/**
 * obtener un detalle
 * @param {*} req 
 * @param {*} res 
 */
const getItem = async (req, res) =>  {
    try{
        const {id} = matchedData(req)
        const data = await storageModel.findById(id);
        res.send({data});
    }catch(e){
        handleHttpError(res,"ERROR_DETAIL_ITEM")
    }
};

/**
 * insertar un registro
 * @param {*} req 
 * @param {*} res 
 */
const createItem =async (req, res) =>  {
    try{
        const {file} = req;
        const fileData = {
        filename: file.filename,
        url:`${PUBLIC_URL}/${file.filename}`,
    };
    const data = await storageModel.create(fileData);
    res.status(201);
    res.send({data});

    }catch(e){
        handleHttpError(res, "ERROR_DETAIL_ITEM")

    }
};

/**
 * eliminar un registro
 * @param {*} req 
 * @param {*} res 
 */
const deleteItem =async (req, res) =>  {
    try{
        const {id} = matchedData(req)
        const dataFile = await storageModel.findById(id);
        const deleteResponse = await storageModel.delete({_id: id});
        const {filename} = dataFile;
        const filepath = `${MEDIA_PATH}/${filename}`;

       // fs.unlinkSync(filepath);
        const data = {
            filepath,
            deleted:deleteResponse.matchedCount,
        };

        res.send({data});

    }catch(e){
        handleHttpError(res,"ERROR_DETAIL_ITEM")
    }
};

module.exports = {getItems, getItem, createItem, deleteItem};
const {check} = require("express-validator");
const validateResults = require("../utils/handlevalidator")

const validatorCreateItem = [
    check("name")
    .exists()
    .notEmpty(),
    check("album")
    .exists()
    .notEmpty(),
    check("cover")
    .exists()
    .notEmpty(),
    check("artist")
    .exists()
    .notEmpty(),
    check("artis.name")
    .exists()
    .notEmpty(),
    check("artis.nickname")
    .exists()
    .notEmpty(),
    check("artis.nationality")
    .exists()
    .notEmpty(),
    check("duration")
    .exists()
    .notEmpty(),
    check("duration.start")
    .exists()
    .notEmpty(),
    check("duration.end")
    .exists()
    .notEmpty(),
    check("mediaId")
    .exists()
    .notEmpty(),
    (req,res,next) => {
        return validateResults(req, res, next)
    }
];


const validatorGetItem = [
    check("Id")
    .exists()
    .notEmpty(),
    (req,res,next) => {
        return validateResults(req, res, next)
    }
];

const validatorUpdateItem = [
    check("id")
    .exists()
    .notEmpty()
    .isMongoId(),
    check("name")
    .exists()
    .notEmpty(),
    check("album")
    .exists()
    .notEmpty(),
    check("cover")
    .exists()
    .notEmpty(),
    check("artist")
    .exists()
    .notEmpty(),
    check("artist.name")
    .exists()
    .notEmpty(),
    check("artist.nickname")
    .exists()
    .notEmpty(),
    check("artist.nationality")
    .exists()
    .notEmpty(),
    check("duration")
    .exists()
    .notEmpty(),
    check("duration.start")
    .exists()
    .notEmpty(),
    check("duration.end")
    .exists()
    .notEmpty(),
    check("mediaId")
    .exists()
    .notEmpty(),
    (req, res, next) => {
        return validateResults(req, res, next)
    }
];


module.exports = {validatorCreateItem, validatorGetItem, validatorUpdateItem};
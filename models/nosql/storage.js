const mongoose = require("mongoose");
const mongooseDelete = require ("mongoose-delete");
const StorageScheme = new mongoose.Schema(
    {
        url:{
            type:String
        },
        filename:{
            type:String
        },
    },
    {
        timestamps:true, //TODO createdAt, UpdatedAt
        versionKey:false
    }
);

//try{
  //      req = matchedData(req);
    //    const {id} = req;
      //  const data = await tracksModel.findById();
        //res.send({data});
    //}catch(e){
      //  handleHttpError(res,"ERROR_GET_ITEM")
    //}

StorageScheme.plugin(mongooseDelete, {overrideMethods: "all"});
module.exports = mongoose.model("storages", StorageScheme)
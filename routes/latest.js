/**
 * Created by Alexander on 26/Jan/2017.
 */
var express=require('express');
var mongodb=require('mongodb');
var router=express.Router();

var mongoClient=mongodb.MongoClient;
var mLab='mongodb://' + process.env.MONGO_LAB;

router.get("/latest",function (req,res) {
    mongoClient.connect(mLab,function (err, db) {
        if(err){return cosoles.error(err);}

        var collection=db.collection('latest');

        collection.find({},{_id:0}).sort({when:-1}).toArray(function (err, docs) {
            if(err)return console.error(err);
            db.close();
            res.json(docs);
        });
    });
});

module.exports=router;
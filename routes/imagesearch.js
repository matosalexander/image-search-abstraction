/**
 * Created by Alexander on 25/Jan/2017.
 */
var express=require('express');
var router=express.Router();
var mongodb=require('mongodb');
var googleSearch=require('google-search');

var gSearch=new googleSearch({
    key:process.env.API_KEY,
    cx:process.env.CSE
});

var mLab='mongodb://' + process.env.MONGO_LAB;
var mongoClient=mongodb.MongoClient;

router.get('/imagesearch/:str',function (req,res) {
    var searchString=req.params.str;
    var page=req.query.offset ? req.query.offset : 5;

    gSearch.build({
        q:searchString,
        start:page,
        //fileType:'jpg',
        num:10
    },function(error,response){
        if(error){return console.log(error)}
        mongoClient.connect(mLab,function (err, db) {
            if(err){return console.error(err);}

            var collection=db.collection('latest');
            var images=[];

            collection.insertOne(
                {
                    term:searchString,
                    when:new Date().toISOString()
                },function () {
                for(var i=0;i<response.items.length;i++){
                    var url="null";
                    var thumbnail = "null";

                    if(response.items[i].hasOwnProperty('pagemap')){
                        if(response.items[i]['pagemap']['cse_image']){
                            url=response.items[i].pagemap.cse_image[0].src;
                        }else if(response.items[i]['pagemap']['imageobject']){
                            url=response.items[i].pagemap.imageobject[0].url;
                        }

                        if(response.items[i]['pagemap']['cse_thumbnail']){
                            thumbnail=response.items[i].pagemap.cse_thumbnail[0].src
                        }
                    }

                    images.push({
                        "url":url,
                        "snippet":response.items[i].snippet,
                        "thumbnail":thumbnail,
                        "context":response.items[i].link
                    });
                }
                db.close();
                res.json(images);
            });
        });
     });
});

module.exports=router;
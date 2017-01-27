var express=require('express');
var app=express();
var port=process.env.PORT||8080;
require('dotenv').config();

app.use(require('./routes'));

app.listen(port,function () {
    console.log("App listening on port "+ port);
});

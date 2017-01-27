/**
 * Created by Alexander on 25/Jan/2017.
 */
var express=require('express');
var router=express.Router();

router.get('/',express.static('./views'));
router.use('/api',require('./imagesearch'));
router.use('/api',require('./latest'));

module.exports=router;


const express = require('express')
const router = express.Router()
const bcrypt = require("bcrypt");
const objectId = require("mongodb").ObjectID;
const jwt = require("jsonwebtoken")

const {
    basic,
    getbasic,
    deletebasic,
    UpDatebasic,
    UpDateAllDate
} = require("../utils/utilsbasic");

router.post('/basic',async (req,res)=>{
    await basic(req,"basic", res);
})

router.get('/getbasic',async (req,res)=>{
    await getbasic(req,"basic", res);
})
router.delete('/deletebasic/:id', async function(req,res){
    await deletebasic(req,"basic",res);
})
router.put('/UpDatebasic/:id', async function(req,res){
    await UpDatebasic(req,"basic",res);
})
router.put('/UpDateAllDate/:id', async function(req,res){
    await UpDateAllDate(req,"basic",res);
})
module.exports = router
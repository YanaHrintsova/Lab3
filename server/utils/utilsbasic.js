const express = require('express')


const basic = async (request, role, response) => {
  const collection = request.app.locals.collection;
    const data = {
        _id:String(request.body._id),
        role:role,
        name:request.body.name,
        describe:request.body.describe,
        price:request.body.price,
        isShow:request.body.isShow,
        date:new Date().toLocaleString('uk-UA')
        
    }
    collection.insertOne(data,function (err,result){
      if(err){
        console.log(err);
        response.sendStatus(500);
      }
      response.sendStatus(200)
    });
};
const getbasic = async (req, role, res) => {
  const collection = req.app.locals.collection;
  collection.find({role:role},{ _id: 0 }).toArray()
  .then(polits => {
      res.send({
          polits
      })
  });
}
const deletebasic = async (req,role,res)=>{
  const id =req.params.id;
  const collection = req.app.locals.collection;
  collection.findOneAndDelete({_id: id}, function(err, result){         
      if(err) return console.log(err);    
      let user = result.value;
      res.send(user);
  });
}
const UpDatebasic = async (req,role,res) =>{
  if(!req.body) return res.sendStatus(400);
  const id = req.params.id;
  const isShow = req.body.isShow;
  const collection = req.app.locals.collection;
  collection.findOneAndUpdate({_id: id}, { $set: {isShow: isShow}},
       {returnOriginal: true },function(err, result){
      if(err) return console.log(err);     
      const user = result.value;
      
      res.sendStatus(200);
  });
}
const UpDateAllDate = async (req,role,res) =>{
  if(!req.body) return res.sendStatus(400);
  console.log(req.body.name)
  const id = req.params.id;
  const name = req.body.name;
  const describe = req.body.describe;
  const price = req.body.price;
  const collection = req.app.locals.collection;
  collection.findOneAndUpdate({_id: id}, { $set: {name:name,describe:describe,price:price}},
       {returnOriginal: true },function(err, result){
      if(err) return console.log(err);     
      const user = result.value;
      res.sendStatus(200);
  });
}

module.exports = {
  basic,
  getbasic,
  deletebasic,
  UpDatebasic,
  UpDateAllDate
};

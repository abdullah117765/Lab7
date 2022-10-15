const express = require('express')
const { dirname } = require('path')
const path = require('path')
const app = express()
const port = 3000
const fs= require("fs");

const db =require("./Model/app.js")

const bodyParser = require('body-parser')
const { default: dbsend } = require('./Model/app')
// npm body-parcer is required to get data in fuction that is send to the server

//fs.copyFileSync("file1.txt","file2.txt");
 

app.use(bodyParser.urlencoded({extended: true}));



app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname,'Ui/index.html'))
})

app.post('/response',function(req,res){
 
  //console.log(req.body.name1); //this name is one which you have mentioned in html tag
var num1= String(req.body.name1);

//res.sendFile(path.join(__dirname,'Ui/response.html',num1))
res.send("Your name is " + num1);
db. dbsend(num1);

})


app.listen(port, () => {
  console.log(`Example app listening on port  http://localhost:${port}`)
})



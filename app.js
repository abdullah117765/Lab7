const express = require('express')
const { dirname } = require('path')
const path = require('path')
const app = express()
const port = 3000
const fs= require("fs");



const bodyParser = require('body-parser')
// npm body-parcer is required to get data in fuction that is send to the server

//fs.copyFileSync("file1.txt","file2.txt");
 

app.use(bodyParser.urlencoded({extended: true}));



app.get('/calculator', (req, res) => {
  res.sendFile(path.join(__dirname,'calculator.html'))
})

app.post('/calculator1',function(req,res){
 
  //console.log(req.body.name1); //this name is one which you have mentioned in html tag
var num1= Number(req.body.name1);
var num2= Number(req.body.name2);
var result= num1 + num2;
res.send("The result is " +result);

})


app.listen(port, () => {
  console.log(`Example app listening on port  http://localhost:${port}`)
})
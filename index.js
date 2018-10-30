const express = require('express');
const fileUpload = require('express-fileupload');
const app = express();
const port =8000;
let message='';

//open databaseClass
const statements=require('./createStatements.json');
const Database=require('./databaseDebug');

let database=new Database(statements.createOptions);

const querys={allusers:`select * from person`}


database.doQuery(querys.allusers).then(data=>{
  quears=data;
  console.log(quears)}


)

console.log(message)


// default options
app.use(fileUpload());


app.post('/login',(req,res)=>managers(req,res));
app.post('/upload', function(req, res) {
  if (Object.keys(req.files).length == 0) {
    return res.status(400).send('No files were uploaded.');
  }

  // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
  let sampleFile = req.files.sampleFile;

  // Use the mv() method to place the file somewhere on your server
  sampleFile.mv('uploads/filename.jpg', function(err) {
    if (err)
      return res.status(500).send(err);

    res.send('File uploaded!');
  });
});

//app.get('/',)

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

function managers(req,res){
  //database.connect();
  console.log(res)
  database.pullSensorData('select password from station_managers where login="tero"').then(results => {
    //res.send(results);
    res.send(results);
  });
} //functioni ends

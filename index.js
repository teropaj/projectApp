const express = require('express');
const fileUpload = require('express-fileupload');
const app = express();
const port =8000;
let message='';
let users;
//open databaseClass
const statements=require('./createStatements.json');
const Database=require('./databaseDebug');

// app.set('view engine', 'ejs');
// app.set('views',path.join('pageViews'))

//app.use(express.static(path.join(__dirname,'public')))
console.log('statements '+statements)

const createOptions={
  host:statements.host,
  port:statements.mysqlport,
  user:statements.admin,
  password:statements.adminpassword,
  database: "projectappdb"
};

//console.log('****createOptions '+createOptions)
let database=new Database(createOptions);

const querys={allusers:`select * from person`}

function takeUsers(req,res) {
    console.log('****takeUsers')
    let gears;
    database.doQuery(querys.allusers).then(data=>
      res.send(data))

}
//console.log(message)



console.log('debugger before')
console.log('****users')
console.log('debugger after')

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
app.get('/', (req, res) => res.send("Hello world"))
app.get('/users',(req,res)=>takeUsers(req,res));
app.get('/api/customers', (req, res) => {
  const customers = [
    {id: 1, firstName: 'John', lastName: 'Doe'},
    {id: 2, firstName: 'Brad', lastName: 'Traversy'},
    {id: 3, firstName: 'Mary', lastName: 'Swanson'},
  ];
  console.log(takeUsers())

  //res.json(customers);
  res.json(takeUsers())
});

users=takeUsers();
app.listen(port, () => console.log(`Example app listening on port ${port}!`));

function managers(req,res){
  //database.connect();
  console.log('****managers*****')
  //database.pullSensorData('select * from person')
  //.then(results => {
    //res.send(results);
    takeUsers().then(data=>{console.log(data);
      res.send(data)})

} //functioni ends

debugger

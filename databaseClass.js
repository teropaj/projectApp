'use strict';
const mysql=require('mysql');




class Database {
  constructor() {
    // this.con = mysql.createConnection({
    //   host: "localhost",
    //   user: "weather",
    //   password: "password",
    //   database: "WeathereService"
    // });
  }
  endDatabase() {
    this.con.end();
  }
  connect(){
    this.con = mysql.createConnection({
      host: "localhost",
      user: "fandt",
      password: "fandt",
      database: "projectadddp"
    });
      this.con.connect();



  }

  pullSensorData(data){
    // let sql = `SELECT * FROM sensor_data`;
    // console.log(sql);
    // con.query("SELECT * FROM sensor_data", function(error, results,fields){
    //   if(error) throw err;
    //   var resultObject = JSON.parse(JSON.stringify(results));
    //   console.log(results);
    // });
      var resultObject;
    //  this.con.connect();

      return new Promise ( (resolve, reject) => {
            this.con.query(data, function (error, result) {
              if (error) reject (error);
              else if (result.length === 0) resolve("No records found")
              else {
              resolve(JSON.stringify(result));
              }

            });
      }); //Promise end

      //return "return";
      //return resultObject;
  }



} //class end

  // database= new Database();
  // database.pullSensorData().then(results => {
  //   console.log(results);
  // });
  //
  // database.endDatabase();
  // //console.log(results);
  // var test='fjsljfsl';

  module.exports=Database;

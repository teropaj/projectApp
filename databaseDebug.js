'use strict';

const mysql=require('mysql');

module.exports=class Database{
  constructor(options) {
    this.options=options;
  }

  doQuery(sql,...parameters){
    return new Promise((resolve, reject)=>{
      let connection=mysql.createConnection(this.options);
      let sqlStatement=connection.query(sql, [...parameters], (err, result)=>{
        if(err) {
          reject(new Error('SQL Error:'+err));
        }
        /*eslint-disable no-console*/
        console.log(sqlStatement.sql);
        resolve(result);
      });
      connection.end();
    });
  }
};

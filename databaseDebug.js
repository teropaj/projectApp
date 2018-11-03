'use strict';

const mysql=require('mysql');

module.exports=class Database{
  constructor(options) {
    this.options=options;
  }

  doQuery(sql,...parameters){
    console.log('options '+this.options)
    return new Promise((resolve, reject)=>{
      //console.log('doQuery '+sql)
      let connection=mysql.createConnection(this.options);
      let sqlStatement=connection.query(sql, [...parameters], (err, result)=>{
        if(err) {
          reject(new Error('SQL Error:'+err));
        }
        /*eslint-disable no-console*/
        debugger
        console.log('sqlStatement: '+sqlStatement.sql);
        console.log('doQuery '+result)

        resolve(result);
        //resolve(JSON.stringify(result))
      });

      connection.end();
    });
  }
};

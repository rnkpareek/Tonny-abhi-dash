var mysql      = require('mysql');
var _          = require('lodash');
var url = require('../../config/config').mysql;
url["multipleStatements"] =true
var connection = mysql.createConnection(url);
var async = require('async');

module.exports= {

  login: function(req,res){
    console.log("-------node side hitting---------",req.body)
   data=req.body;
   console.log("--------here node ---------",req.body[0].username)


    var sql = 'select * from auro_user where firstname = ("'+req.body[0].username+'" )';
    connection.query(sql, function (err, result) {
      if (err) throw err;
      else{

        console.log("got data : " + JSON.stringify(result));
        if(result.length == 0){
          console.log("data is null"+JSON.stringify(result).length)
          return res.json({save:false,message:'invalid'})
        }
        else{
          console.log("not null")
          if(result[0].password === req.body[0].password){
            var user_session = {
              username   : result[0].firstname,
            };
            console.log(user_session)
            var jwt    = require('jsonwebtoken');
            var token  = jwt.sign(user_session, 'scriptbees', {
              expiresIn: '2h' // expires in 3 hours
            });
            var name = result[0].firstname +" "+result[0].lastname;
            var role = result[0].user_role_id;
            console.log("----------result",name+" "+role)
            console.log("token"+token)

            return res.json({save:true,message:'valid',token:token,name:name,role:role})

          }
          else{
            console.log("not matching")
            return res.json({save:false,message:'invalid'})
          }
        }

        }
        });

  },

  /*fetchInventoryData: function (req, res) {
   
    console.log("data"+JSON.stringify( req.body))
    var username = req.body[0].username
    console.log("data11111"+username)
    var sql = 'select * from login where user_Name = ("'+req.body[0].username+'" )';
    connection.query(sql, function (err, result) {
      if (err) throw err;
      else{

        console.log("got data : " + JSON.stringify(result));
        if(result.length == 0){
          console.log("data is null"+JSON.stringify(result).length)
          return res.json({save:false,message:'invalid'})
        }
        else{
          console.log("not null")
          if(result[0].password === req.body[0].password){
            var user_session = {
              username   : result[0].user_Name,
            };
            console.log(user_session)
            var jwt    = require('jsonwebtoken');
            var token  = jwt.sign(user_session, 'honda10507Khimji', {
              expiresIn: '2h' // expires in 3 hours
            });
            console.log("token"+token)
            return res.json({save:true,message:'valid',token:token})

          }
          else{
            console.log("not matching")
            return res.json({save:false,message:'invalid'})
          }
        }

        }
        });

    },*/

 /* createusers:function (req,res) {
    var data= req.body;
    console.log("data in node side"+JSON.stringify(data))
    var values = [data.lastname,data.confirmpassword]
    var date =  new Date()

    var sql = 'INSERT INTO login (user_Name, password,created_date,first_Name,last_Name,confirm_password)' +
      ' VALUES ("'+data.userName+'","'+data.password+'","'+date+'","'+data.firstName+'","'+data.lastName+'","'+data.confirmPassword+'") ';
    connection.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Number of records inserted: " + result.affectedRows);
    });
  },
  deleteuser:function (req,res) {
   var id = req.body;
    console.log("id in server")
   console.log("id in server"+id)
  },
  updateuser:function () {

  },*/
  getuser:function (req,res) {
    connection.query('SELECT * from test  ;',
      function (err, result, feilds) {
        if (err) {
          console.log("my sql cant connect")
        }
        else {
          console.log("connect"+JSON.stringify(result))
          res.status(200).json(result);
        }
      })
  },

 /* register:function (req,res) {
    var data = req.body;
  
    console.log("Number of records inserted: " + data.lastname);
    var values = [data.lastname,data.confirmpassword]
    var date =  new Date()

    var sql = 'INSERT INTO user (username, password,created_Date,email)' +
      ' VALUES ("'+data.lastname+'","'+data.confirmpassword+'","'+date+'","'+data.Email+'") ';
    connection.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Number of records inserted: " + result.affectedRows);
    });
  }*/

}

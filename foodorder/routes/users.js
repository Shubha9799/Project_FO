var express = require('express');
const { request } = require('http');
var router = express.Router();
let dbConnection = require('./../db/db').localConnect(); 

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

// Signup database post and get method
router.get('/', function (req, res, next) {
  dbConnection.query('SELECT * FROM sign_up', (error,results,fields) => {
    if(error) throw error;
    res.send(results);

  });
  // res.send('respond with a resource');
});

//post methods-login

router.post('/login', (req, res, next) => {
  console.log(req.body)
  let {
   name,
   phone,
    
  } = req.body

  let insertcommand = `INSERT INTO login(name,phone)
   VALUES ('${name}','${phone}')`;

  dbConnection.query(insertcommand, (err, result) => {

    if (err) throw err;

    res.send("detailes are fetched from postman api detailes are inserted");

  });

})
router.get('/login', function (req, res, next) {

  dbConnection.query('SELECT * FROM login', (error, results, fields) => {
    if (error) throw error;
    res.send(results);

  });

  //res.send('respond with a resource');

});



router.post('/sign-up', (req, res, next) => {
  console.log(req.body)
  let {
   Name,
   phone,
   email,
   Address,
   city,
   state,
   zip 
  } = req.body

  let insertcommand = `INSERT INTO sign_up(Name,phone,email,Address,city,state,zip)
   VALUES ('${Name}','${phone}','${email}','${Address}','${city}','${state}','${zip}')`;

  dbConnection.query(insertcommand, (err, result) => {

    if (err) throw err;

    res.send("detailes are fetched from postman api detailes are inserted");

  });

})

router.get('/sign-up', function (req, res, next) {

  dbConnection.query('SELECT * FROM sign_up', (error, results, fields) => {
    if (error) throw error;
    res.send(results);

  });

  //res.send('respond with a resource');

});

// ordernow database post and get method
router.get('/order-now', function (req, res, next) {
  dbConnection.query('SELECT * FROM order_now', (error,results,fields) => {
    if(error) throw error;
    res.send(results);

  });
  // res.send('respond with a resource');
});

//post methods-login

router.post('/order-now', (req, res, next) => {
  let {
   Name,
   Address,
   phone
  } = req.body

  let insertcommand = `INSERT INTO order_now(Name,Address,phone)
   VALUES ('${Name}','${Address}','${phone}')`;

  dbConnection.query(insertcommand, (err, result) => {

    if (err) throw err;

    res.send("detailes are fetched from postman api detailes are inserted");

  });

})

router.get('/order-now', function (req, res, next) {

  dbConnection.query('SELECT * FROM order_now', (error, results, fields) => {
    if (error) throw error;
    res.send(results);

  });

  //res.send('respond with a resource');

});
//booknow post and get method
router.get('/book-now', function (req, res, next) {
  dbConnection.query('SELECT * FROM book_now', (error,results,fields) => {
    if(error) throw error;
    res.send(results);

  });
  // res.send('respond with a resource');
});

//post methods-login

router.post('/book-now', (req, res, next) => {
  let {
   Name,
   phone,
   email,
   date,
   time,
   noa
  } = req.body

  let insertcommand = `INSERT INTO book_now(Name,phone,email,date,time,noa)
   VALUES ('${Name}','${phone}','${email}','${date}','${time}','${noa}')`;

  dbConnection.query(insertcommand, (err, result) => {

    if (err) throw err;

    res.send("detailes are fetched from postman api detailes are inserted");

  });

})

router.get('/book-now', function (req, res, next) {

  dbConnection.query('SELECT * FROM book_now', (error, results, fields) => {
    if (error) throw error;
    res.send(results);

  });

  //res.send('respond with a resource');

});

module.exports = router;
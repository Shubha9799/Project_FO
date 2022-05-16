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
});

  //res.send('respond with a resource');
  //login and signup page connection

router.post('/login', (req, res, next) => {
  let {
    name,
    phone
  } = req.body; // destructing of object property 

  let userFound = `select * from sign_up  WHERE name = '${name}' and phone= '${phone}'`;

  dbConnection.query(userFound, (error, result, fields) => {

    if (error) {
      res.send(error);
    } else {
      if (result.length) {
        // res.send(`{message: 'user found', usercount: 1}`);
        res.json(result)
      } else {
        // res.send(`{message: 'user no found', usercount: 0}`);
        res.json({ message: 'user not found', usercount: 0 })
      }
    }

  });

});

//delete operation

router.delete('/delete-user/:phone', (req, res, next) => {
  let phone = req.params.phone;
  let deleletq = `DELETE FROM food_order.sign_up WHERE phone ='${phone}'`;

  dbConnection.query(deleletq, (error, result, fields) => {
    if (error) {
      res.send(error);
      throw error;
    } else {
      console.log(result);
      if (result.affectedRows) {
        res.send(`${phone} has been delete`)
      } else {
        res.send(`Unable to delete user, Not Found`);
      }
    }
  });

});




module.exports = router;
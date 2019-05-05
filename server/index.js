const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = process.env.PORT || 8080;
const path = require('path');
const app = express();
app.use(bodyParser.json());
app.use(express.static(`${__dirname}/../react-client/dist`));

const mysql = require('mysql');

const con = mysql.createConnection({
  host: "localhost",
  port: "3308",
  user: "root",
  password: "",
  database: "webzo"
});



con.connect(function(err) {
    if(err) throw err;
  console.log("MySQL DataBase Connected!");
});

app.get('/testimonials/add', (req, res) => {
  const { name, title, content } = req.query;
  console.log(name, title, content);
  INSERT_INTO_TESTIMONIALS_QUERY = `INSERT INTO testimonials (name, title, content) VALUES ('${name}', '${title}', '${content}')`;
  con.query(INSERT_INTO_TESTIMONIALS_QUERY, (err, results) => {
    if(err) {
      return res.send(err);
    }
    
  });
});

app.get('/testimonials/get', (req, res) => {
  SELECT_FROM_TESTIMONIALS_QUERY = `SELECT * FROM testimonials`;
  con.query(SELECT_FROM_TESTIMONIALS_QUERY, (err, results) => {
    if(err) {
      return res.send(err);
    }

    res.send(results);
    
  });
});

app.get('/products/get', (req, res) => {
  SELECT_FROM_PRODUCTS_QUERY = `SELECT * FROM products`;
  con.query(SELECT_FROM_PRODUCTS_QUERY, (err, results) => {
    if(err) {
      return res.send(err);
    }

    res.send(results);
    
  });
});

app.get('/loginpage/get', (req, res) => {
  SELECT_FROM_AUTHENTICATION_QUERY = `SELECT * FROM authentication`;
  con.query(SELECT_FROM_AUTHENTICATION_QUERY, (err, results) => {
    if(err) {
      return res.send(err);
    }

    res.send(results);
    
  });
});

app.get('/signuppage/add', (req, res) => {
  const { email, password, name, contact_no } = req.query;
  console.log( email, password, name, contact_no );
  INSERT_INTO_AUTHENTICATION_QUERY = `INSERT INTO authentication (email, password, name, contact_no) VALUES ('${email}', '${password}', '${name}', '${contact_no}')`;
  con.query(INSERT_INTO_AUTHENTICATION_QUERY, (err, results) => {
    if(err) {
      return res.send(err);
    }

    res.send(results);
    
  });
});

app.get('*', (req, res) => {
    res.sendFile(path.resolve(`${__dirname}/../react-client/dist/index.html`));
});
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}!`);
});


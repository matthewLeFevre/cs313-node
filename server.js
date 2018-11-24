const express = require("express");
const app = express();
const { Pool } = require('pg');
const bodyParser = require("body-parser");
const accountModule = require("./library/account_model");

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.use(express.static("public"));
app.set("views", "views");
app.set('view engine', 'ejs');

app.get("/", (req, res)=> {
  res.render("pages/home");
});

app.get("/getUsers/:id", async (req, res)=> {
  let id = req.params.id;
  const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: true,
  });
  const response = await pool.query(`SELECT * FROM account WHERE accountId = ${id};`);
  await pool.end();
  res.send(JSON.stringify(response));
});

app.post("/createAccount", async (req, res) => {
  try {
    const pool = new Pool({
      connectionString: process.env.DATABASE_URL,
      ssl: true,
    });
  
    const response = await pool.query(`INSERT INTO account ( accountName, accountPassword ) VALUES ('${req.body.accountName}', '${req.body.accountPassword}');`);
    await pool.end();
    res.send(response);
  } catch (err) {
    console.log(err);
  }
  
});

app.post("/loginAccount", async (req, res) => {
  try {
    if (accountModule.checkAccountName(req.body.accountName)) {
      let account = await accountModule.getAccountInfo(req.body.accountName).then(data => {return data;});
      console.log(account);
      console.log(account.accountPassword, req.body.accountPassword);
      if(account.accountPassword === req.body.accountPassword) {
        res.send(JSON.stringify(account));
      } else {
        res.send("<h1>User was not loggedin</h1>");
      }
    } else {
      console.log(req);
    }
  } catch (err) {
    console.log(err);
  }
});

app.get("/postal", (req, res)=> {
  res.render("pages/week9/index");
});

app.get("/price", (req, res)=> {
  let payload = [req.body.accountName, req.body.accountPassword];
  console.log(payload);
  // let payload = {type: "envelope", weight: 45};
  // res.render("pages/week9/price", payload);
});

app.all("*", (req, res) => {
  res.send("<h1>404</h1> <p>Y'all made it somewhere you shouldn'ev blunderyly.</p>")
});

app.listen( process.env.PORT || 5000, ()=> {
  console.log("running class server");
});
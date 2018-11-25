const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const accountModule = require("./library/account_model");
const partyModule = require("./library/party_model");

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


// user account routes 
// Need to fileter and check inputs

app.get("/getAccount/:id", async (req, res) => {
  let id = req.params.id;
  let account = await accountModule.getAccount(id);
  res.send(account);
});

app.get("/accounts", async (req, res) => {
  let accounts = await accountModule.getAccounts();
  res.send(accounts);
});

app.post("/createAccount", async (req, res) => {
  try {
    let createAccount = await accountModule.createAccount(req.body.accountName, req.body.accountPassword);
    console.log(createAccount);
    if (createAccount.rowCount === 1) {
      res.send("Account Created successfully please loging");
    } else {
      res.send("an error occured.");
    }
  } catch (err) {
    console.log(err);
  }
});

app.post("/loginAccount", async (req, res) => {
  try {
    if (accountModule.checkAccountName(req.body.accountName)) {
      let account = await accountModule.getAccountInfo(req.body.accountName).then(data => {return data;});
      console.log(account);
      console.log(account.accountpassword, req.body.accountPassword);
      if(account.accountpassword === req.body.accountPassword) {
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

// messaging routes

app.get("/partiesByAccount/:accountId", async (req, res) => {
  let id = req.params.accountId;
  let parties = await partyModule.getPartiesByAccountId(id);
  res.send(parties);
});

app.get("/dispatchesByParty/:partyId", async (req, res) => {
  let id = req.params.partyId;
  let dispatches = await partyModule.getDispatchesByParty(id);
  res.send(dispatches);
});

app.get("/accountsByParty/:partyId", async (req, res) => {
  let id = req.params.partyId;
  let accounts = await partyModule.getAccountsByParty(id);
  res.send(accounts);
});

app.post("/createParty", async (req, res) => {
  try {
    let partyInfo = {
      partyName : req.body.partyName ? req.body.partyName : `${await partyModule.getAccount(req.body.accountId).accountName}'s Party`,
      accountId : req.body.accountId,
    }
    let createParty = await partyModule.createParty(partyInfo);
    if(createParty.rowCount === 1) {
      let addAccountToParty = await partyModule.addAccountToParty(req.body.accountId, createParty.rows[0].partyid);
      if (addAccountToParty) {
        res.send(await partyModule.getPartiesByAccountId(req.body.accountId));
      } else {
        res.send("party created but user was not added.");
      }
    } else {
      res.send( "creating party failed");
    }
  } catch (err) {
    console.log(err);
  }
});
app.post("/addAccountToParty", async (req, res) => {
  let accountId = req.body.accountId,
      partyId = req.body.partyId;
  let addAccountToParty = partyModule.addAccountToParty(accountId, partyId);
  if(addAccountToParty) {
    res.send("Account added successfully");
  } else {
    res.send("Account did not add successfully");
  }
});
app.post("/deleteParty", async (req, res) => {})
app.post("/createDispatch", async (req, res) => {})
app.post("/deleteDispatch", async (req, res) => {})

app.all("*", (req, res) => {
  res.send("<h1>404</h1> <p>Y'all made it somewhere you shouldn'ev blunderyly.</p>")
});

app.listen( process.env.PORT || 5000, ()=> {
  console.log("running class server");
});
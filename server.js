const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const accountModule = require("./library/account_model");
const partyModule = require("./library/party_model");
const path = require('path');

app.use(express.static(path.join(__dirname, 'wave-length/build')));
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.use(express.static("public"));
app.set("views", "views");
app.set('view engine', 'ejs');

// user account routes 
// Need to fileter and check inputs

app.get("/getAccount/:id", async (req, res) => {
  let id = req.params.id;
  let account = await accountModule.getAccount(id);
  res.send(account);
});

app.get("/accounts", async (req, res) => {
  let accounts = await partyModule.getAccounts();
  console.log(accounts);
  res.send({data: accounts});
});

app.post("/createAccount", async (req, res) => {
  try {
    if(!accountModule.checkAccountName(req.body.accountName)) {
      res.send({status: "failure", message: "An account with that username already exists. Please choose a different username."})
    } else {
      let createAccount = await accountModule.createAccount(req.body.accountName, req.body.accountPassword);
      console.log(createAccount);
      if (createAccount.rowCount === 1) {
        res.send({status: "success", message: "Account Created successfully please loging"});
      } else {
        res.send({status: "failure", message: "An error occured. Please try again."});
      }
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
        res.send({status: "success", data: account});
      } else {
        res.send({status: "failure", message: "user was not loggedin!"});
      }
    } else {
      console.log(req);
      res.send({status: "failure", message: "account does not exist"});
    }
  } catch (err) {
    console.log(err);
  }
});

// messaging routes

app.get("/partiesByAccount/:accountId", async (req, res) => {
  let id = req.params.accountId;
  let parties = await partyModule.getPartiesByAccountId(id);
  res.send({data: parties});
});

app.get("/dispatchesByParty/:partyId", async (req, res) => {
  let id = req.params.partyId;
  let dispatches = await partyModule.getDispatchesByParty(id);
  res.send({data: dispatches});
});

app.get("/accountsByParty/:partyId", async (req, res) => {
  let id = req.params.partyId;
  let accounts = await partyModule.getAccountsByParty(id);
  res.send(accounts);
});

app.post("/createParty", async (req, res) => {
  try {
    console.log(req.body);
    let partyInfo = {
      partyName : req.body.partyName ? req.body.partyName : `${await accountModule.getAccount(req.body.accountId).accountName}'s Party`,
      accountId : req.body.accountId,
    }
    let createParty = await partyModule.createParty(partyInfo);
    if(createParty.rowCount === 1) {
      let addAccountToParty = await partyModule.addAccountToParty(req.body.accountId, createParty.rows[0].partyid);
      if (addAccountToParty) {
        res.send({data: await partyModule.getPartiesByAccountId(req.body.accountId)});
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
    let accounts = await partyModule.getAccountsByParty(partyId);
    res.send({status: "success", accounts: accounts});
  } else {
    res.send({status: "failure", message: "Account did not add successfully"});
  }
});

app.post("/deleteParty", async (req, res) => {
  try {
    let deleteParty = await partyModule.deleteParty(req.body.partyId);
    if(deleteParty.rowCount == 1) {
      res.send({status: "success", message: "Party deleted successfully"});
    } else {
      res.send({status: "failure", message: "Party was not deleted successfully"});
    }
  } catch (err) {
    console.log(err);
  }
});

app.post("/createDispatch", async (req, res) => {
  try {
    let data = {accountid: req.body.accountid, partyid: req.body.partyid, dispatchtext: req.body.dispatchtext};
    let createDispatch = await partyModule.createDispatch(data);
    let dispatches = await partyModule.getDispatchesByParty(req.body.partyid);
    res.send({data: dispatches});
  } catch(err) {
    console.log(err);
  }
});

// send dispatch id and party id
app.post("/deleteDispatch", async (req, res) => {
  try {
    let deleteDispatch = await partyModule.deleteDispatch(req.body.dispatchId);
    if(deleteDispatch.rowCount == 1) {
      let dispatches = await partyModule.getDispatchesByParty(req.body.partyId);
      res.send({status: "success", data: dispatches});
    } else {
      res.send({status: "failure", message: "Dispatch delete failed."});
    }
  } catch (err) {
    console.log(err);
  }
})

app.all("*", (req, res) => {
  res.sendFile(path.join(__dirname+'/wave-length/build/index.html'));
});

app.listen( process.env.PORT || 5000, ()=> {
  console.log("running class server");
});
const express = require("express");
// const ejs = require("ejs");
const app = express();

app.use(express.static("public"));

app.set("views", "views");
app.set('view engine', 'ejs');
app.get("/home", (req, res)=> {
  res.render("pages/home");
});
app.get("/postal", (req, res)=> {
  res.render("pages/week9/index");
});
app.get("/price", (req, res)=> {
  let payload = req.query;
  console.log(payload);
  // let payload = {type: "envelope", weight: 45};
  // res.render("pages/week9/price", payload);
});

app.all("*", (req, res) => {
  res.send("<h1>404</h1> <p>Y'all made it somewhere you shouldn'ev.</p>")
});

app.listen( process.env.PORT || 5000, ()=> {
  console.log("running class server");
});
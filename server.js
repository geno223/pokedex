const express = require("express");
const app = express();
const Pokemon = require("./models/pokemon");
const morgan = require("morgan");
const methodOverride = require("method-override");

///Middleware

app.use(morgan("dev"));
app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"))
//Routes

//test

app.get("/", (req, res) => {
  res.send("Pokemon");
});

//index
app.get("/pokemon", (req, res) => {
  res.render("index.ejs", { data: Pokemon });
});

//new

app.get("/pokemon/new", (req, res) => {
  res.render("new.ejs");
});

//create

app.post("/pokemon", (req, res) => {
  const body = req.body;
  Pokemon.push(body);
  res.redirect("/pokemon");
});
//edit

app.get("/pokemon/:id/edit", (req, res) => {
  const id = req.params.id;
  const pokemon = Pokemon[id];
  res.render("edit.ejs", { pokemon, id });
})

//Update

app.put("/pokemon/:id", (req, res)=>{
  const id= req.params.id
  const body = req.body
  Pokemon[id]= body
  res.redirect("/pokemon")
})

//Delete
app.delete("/pokemon/:id", (req, res)=>{
  const id= req.params.id
  Pokemon.splice(id,1)
  res.redirect('/pokemon')
})

//show
app.get("/pokemon/:id", (req, res) => {
  const id = req.params.id;
  const pokemon = Pokemon[id];
  res.render("show.ejs", { pokemon, id });
});

// TURNING ON SERVER LISTENER
app.listen(3000, () => {
  console.log("server is listening on port 3000");
});

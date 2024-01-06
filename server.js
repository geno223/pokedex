const express = require("express");
const app = express();
const Pokemon = require("./models/pokemon");
const morgan = require("morgan");
const methodOverride = require("method-override");

///Middleware

app.use(morgan("dev"));
app.use(methodOverride("_method"));

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

app.get("/pokemon/new", (req, res)=>{
    res.render("new.ejs")
})

//create

app.post("/pokemon", (req, res)=>{
    const body = req.body
    console.log(body)
    Pokemon.push(body)
    res.redirect("/pokemon")
})


//show
app.get("/pokemon/:id", (req, res)=>{
    const id= req.params.id
    const Pokemon = Pokemon[id]
    res.render("show.ejs", {pokemon, id})

})




// TURNING ON SERVER LISTENER
app.listen(3000, () => {
  console.log("server is listening on port 3000");
});

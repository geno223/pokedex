const express    = require('express');
const app        = express();
const Pokemon    = require('./models/pokemon.js');




// INDEX
app.get('/pokemon', (req, res) => {
res.render('index.ejs', { Pokemon });
});


// New
// GET /pokemon/new

app.get('/pokemon/new', (req, res)=>{

    res.render("new.ejs")
})


// Edit
// GET /pokemon/:id/edit

app.get("/pokemon/:id/edit", (req, res)=>{
    const id = req.params.id

    const singlepokemon = Pokemon[id]
   
    res.render("edit.ejs", {singlepokemon, id} )

})

// Create
// POST /pokemon


// Update
// PUT /pokemon/:id


// Destroy
// DELETE /pokemon/:id


// SHOW
app.get('/pokemon/:id', (req, res) => {

    const id = req.params.id

    const singlepokemon = Pokemon[id]
   
    res.render('show.ejs', {singlepokemon, id})

});

// TURNING ON SERVER LISTENER
app.listen(3000, () => {console.log("server is listening on port 3000")})
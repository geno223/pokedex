const express    = require('express');
const app        = express();
const Pokemon    = require('./models/pokemon.js');



app.get("/", (req, res) => {

    res.send("<h1>Pokedex</h1>")
})

// INDEX
app.get('/pokemon', (req, res) => {
res.render('index.ejs', { data: Pokemon });
});


// SHOW
app.get('/pokemon/:id', (req, res) => {
res.render('show.ejs', { data: Pokemon[req.params.id] });
});

// New
// GET /pokemon/new


// Edit
// GET /pokemon/:id/edit

// Create
// POST /pokemon


// Update
// PUT /pokemon/:id


// Destroy
// DELETE /pokemon/:id


// TURNING ON SERVER LISTENER
app.listen(3000, () => {console.log("server is listening on port 3000")})
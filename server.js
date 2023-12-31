const express    = require('express');
const app        = express();
const Pokemon    = require('./models/pokemon.js');




// INDEX
app.get('/', (req, res) => {
res.render('index.ejs', { Pokemon });
});


// SHOW
app.get('/pokemon/:id', (req, res) => {

    const id = req.params.id

    const singlepokemon = Pokemon[id]
   
    res.render('show.ejs', {singlepokemon, id})

});

// New
// GET /pokemon/new

app.get('/pokemon/new', (req, res)=>{
    
})


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
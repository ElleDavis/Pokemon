const express = require ("express")
const app = express()
const PORT = 3000;

const pokemon=require ("./Models/pokemon")



console.log("Hey Ms.Parker")

app.get ("/",(req,res)=>{
    res.send('Welcome to the Pokemon App!',  
   // { data: pokemonData, }
         );
})

app.get ("/pokemon",(req,res)=>{
    res.render("Index.ejs",
 { data: pokemon, }
    )
})

app.get ("/pokemon/:id",(req,res)=>{
    res.send(req.params.id);
    console.log("whatever")
})


app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
  });
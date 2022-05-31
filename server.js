const express = require ("express")
const app = express()
const PORT = 3000;

const pokemon=require ("./Models/pokemon")



console.log("Hey Ms.Parker")

app.get ("/",(req,res)=>{
    res.send('Welcome to the Pokemon App!');
})

app.get ("/pokemon",(req,res)=>{
    res.render("Index.ejs")
})


app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
  });
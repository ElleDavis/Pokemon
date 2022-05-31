const express = require ("express")
const app = express()
const PORT = 3000;


console.log("Hey Ms.Parker")

app.get ("/",(req,res)=>{
    res.send('Welcome to the Pokemon App!');
})

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
  });
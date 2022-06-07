const mongoose = require("mongoose")

//create the schema
const PokemonSchema=mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    img:{
        type:String,
        required:true
    }
})
//create the model
module.exports=mongoose.model("pokemon", PokemonSchema)


const mongoose = require("mongoose");

const JokesSchema = new mongoose.Schema({

setup: {
    type: String,
    enum: [
        "Where do programmers hang out?",
        "What kind of music do planets listen to?",
        "What does a baby computer call his father?",
        "After an unsuccessful harvest, why did the farmer decide to try a career in music?",
    ]
},

punchline: {
    type: String,
    enum: [
        "Foo Bar",
        "Nep-tunes",
        "Data",
        "Because he had a ton of sick beets.",
    ]
},


    
}, {timestamps: true})

const JokesModel = mongoose.model("Jokes", JokesSchema)

module.exports = Jokes
const mongoose = require('mongoose');

const jokesDB = "jokesDB";

mongoose.connect(`mongodb://localhost/${jokesDB}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

.then(() => {
    console.log("you connected to the " + jokesDB)
})
.catch((err) => {
console.log("There was an error connecting to " + jokesDB)
console.log(err)
})
const express = require("express")

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

const mongoose = require("mongoose")
const databaseName = "dogs"

//create the "dog" model - shape of the documents inside a collection
const DogSchema = mongoose.Schema({
    name: {
        type: String,
    },
    age: {
        type: Number,
    },
    isFriendly: {
        type: Boolean,
    },
}, { timestamps: true })

const DogModel = mongoose.model("Dog", DogSchema)

mongoose.connect("mongodb://localhost/" + databaseName, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

.then(() => {
    console.log("you connected to the " + databaseName)
})
.catch((err) => {
console.log("There was an error connecting to " + databaseName)
console.log(err)
})

//routes
app.get('/', (req,res) => {
    return(
        res.json({ message: "Hello World!"})
    )})

    
    app.get("/api/dogs/getAll", (req, res) => {
        console.log("inside all dogs")
        
        DogModel.find({})

        .then((allDogObjects) => {
            console.log("found all dogs")
            console.log(allDogObjects)
            return res.json(allDogObjects)
        })
        .catch((err) => {
            console.log(err)
            return res.json(err)
    })
})

    app.get("/api/dogs/:thisDogId", (req, res) => {
        console.log('inside of get dog by id')
        console.log(`getting dog id: $(req.params.thisDogId)`)

        DogModel.findById(req.params.thisDogId)
        .then((dogObject) => {
            console.log(dogObject)
            return res.json(dogObject)
        })
        .catch((err) => {
            console.log(err)
            return res.json(err)
        })
    })


    app.post("/api/dogs/create", (req,res)=>{
        console.log("Inside create dog route")
        console.log(req.body)
        DogModel.create(req.body)
        .then((newDogObject) => {
            console.log(newDogObject)
            return res.json(newDogObject)
        })
        .catch((err) => {
            console.log(err)
            return res.json(err)
        }) 
    })

app.listen(8000, () => {
    console.log("You have started your server!")
})

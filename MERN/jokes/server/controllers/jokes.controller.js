const jokes = require("../models/jokes.model")

module.exports = {
 
    findAllJokes: (req,res) => {
        jokes.find()
        //result of the promise
        .then((allJokes) => {
            console.log(allJokes);
            res.json(allJokes)
        })
        .catch((err) => {
            console.log(err);
        })
    },

    createNewJoke: (req, res) => {
        jokes.create(req.body)
        .then((newJoke) => {
        console.log(newJoke);
        res.jason(newJoke);
        })
        .catch((err)=> {
            console.log(err);
            res.status(400).json(err);
        })
    },

    findOneJoke: (req, res) => {
        jokes.findOne({_id: req.params.id})
        .then((oneJoke) => {
            console.log(oneJoke);
            res.jason(oneJoke);
            })
            .catch((err)=> {
                console.log(err);
                res.status(400).json(err);
            })  
    },

    deleteOneJoke: (req, res) => {
        jokes.deleteOne({_id: req.params.id})
        .then((deletedJoke) => {
            console.log(deletedJoke);
            res.jason(deletedJoke);
            })
            .catch((err)=> {
                console.log(err);
                res.status(400).json(err);
            })  
    },

    updateJoke: (req, res) => {
        jokes.findOneAndUpdate({_id: req.params.id},
        req.body,
        {new: true, runValidators: true}
        )
        .then((updatedJoke)=> {
        console.log(updatedJoke);
        res.jason(updatedJoke);
        })
        .catch((err) => {
            console.log(err);
            res.status(400).json(err);
        })
    },
}
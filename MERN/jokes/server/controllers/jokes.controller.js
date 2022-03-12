const Jokes = require("../models/jokes.model")

    const findAllJokes = (req,res) => {
        Jokes.find()
        .then((allJokes) => {
            console.log(allJokes);
            res.json(allJokes)
        })
        .catch((err) => {
            console.log(err);
        })
    }

   const createNewJoke = (req, res) => {
        Jokes.create(req.body)
        .then((newJoke) => {
        console.log(newJoke);
        res.json(newJoke);
        })
        .catch((err)=> {
            console.log(err);
            
        })
    }

    const findOneJoke = (req, res) => {
        Jokes.findOne({_id: req.params._id})
        .then((oneJoke) => {
            console.log(oneJoke);
            res.json(oneJoke);
            })
            .catch((err)=> {
                console.log(err);
                
            })  
    }

    const deleteOneJoke = (req, res) => {
        Jokes.deleteOne({_id: req.params._id})
        .then((result) => {
            console.log(result);
            res.json(result);
            })
            .catch((err)=> {
                console.log(err);
                
            })  
    }

    const updateJoke = (req, res) => {
        Jokes.findOneAndUpdate({_id: req.params._id},
        req.body,
        {new: true, runValidators: true}
        )
        .then((updatedJoke)=> {
        console.log(updatedJoke);
        res.json(updatedJoke);
        })
        .catch((err) => {
            console.log(err);
            
        })
    }

    module.exports = {
        findAllJokes,
        createNewJoke,
        findOneJoke,
        deleteOneJoke,
        updateJoke
}
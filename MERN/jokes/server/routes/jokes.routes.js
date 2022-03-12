const JokesController = require("../controllers/jokes.controller");

module.exports=(app) => {
    app.get("/api/jokes", JokesController.findAllJokes)

    app.post("/api/jokes/create", JokesController.createNewJoke)
    
    app.get("/api/jokes/:_id", JokesController.findOneJoke)
    
    app.delete("/api/jokes/:_id", JokesController.deleteOneJoke)

    app.put("/api/jokes/:_id", JokesController.updateJoke)
}
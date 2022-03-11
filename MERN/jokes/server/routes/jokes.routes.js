const jokesController = require("../controllers/jokes.controller");

module.exports=(app) =>{
    app.get("/api/jokes", jokesController.findAllJokes)

    app.post("/api/jokes", jokesController.createNewJoke)
    
    app.get("/api/jokes/:id", jokesController.findOneJoke)
    
    app.delete("/api/jokes/:id", jokesController.deleteOneJoke)
    
    app.post("/api/jokes/:id", jokesController.createNewJoke)
}
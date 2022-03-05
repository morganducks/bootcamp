const { request, response } = require("express");
const express = require("express")
// const faker = require("faker")
const { faker } = require('@faker-js/faker');
const app = express()



app.get("/api/welcome", (request, response)=>{
    console.log("This is the welcome API route");
    response.json({message: "Welcome to our API... this is the response"})
})


// app.get("/api/faker", (request, response) => {
//     const companyName = faker.company.companyName();
//     const compAddress = faker.address.companyAddress();

// response.json({
//     id: companyName,
//     name: companyName,
//     userAddress: compAddress,
// })

// })

//sets const with key pairs
const companyObj = () => ({
    name: faker.company.companyName(),
    email: faker.internet.email(),
    addressNum: faker.address.streetAddress(),
    compAddress: faker.address.streetName(),
    compCity: faker.address.city(),
    state: faker.address.state(),
    zip: faker.address.zipCode(),
    country: faker.address.country(),
    })

    
app.get("/api/company/new", (request, response)=> {
    const newPlace = companyObj() // places key pairs in newPlace
    response.json(newPlace); //displays data
    })

const userObj = () => ({
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    phone: faker.phone.phoneNumber(),
    email: faker.internet.email(),
    password: faker.internet.password(),

    })

    app.get("/api/user/new", (request, response)=> {
        const newUser = userObj()
        response.json(newUser);
        })



     app.get("/api/user/company", (request, response)=> {
            const newUser = userObj()
            const newPlace = companyObj()
            //combines so all the data appears
            const combineObj = {
                user: newUser,
                company: newPlace,
            }
            response.json(combineObj);
            })
    
            








app.listen(8000, ()=>console.log("You have successfully connected to port 8000"));

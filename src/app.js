require('./db/connection'); 
const { default: mongoose } = require('mongoose');
const yargs = require("mongoose"); 
const mongoose = require("mongoose"); 
const { createMovie } = require("./movies/functions"); 

const app= async (yargsObj) => {
    if (yargsObj.create) {
        await createMovie({ title: yargsObj.title, actor: yargsObj.actor, director: yargsObj.director, year: yargsObj.year }); 
        // adds a movie to mongoDB 
    } else if (yargsObj.read) {
        // list all movies from mongoDB
        await readMovie({ title: yargsObj.title, actor: yargsObj.actor, director: yargsObj.director, year: yargsObj.year });
    } else if (yargsObj.update) {
        // updae one movie from mongoDB
        await updateMovie({ title: yargsObj.title, actor: yargsObj.actor, director: yargsObj.director, year: yargsObj.year });
    } else if (yargsObj.delete) {
        // delete oen movie from mongoDB
        await deleteMovie({ title: yargsObj.title, actor: yargsObj.actor, director: yargsObj.director, year: yargsObj.year });
    } else {
        console.log("Incorrect command");
    }
    await mongoose.disconnect();
}; 

app(yargs.argv); 
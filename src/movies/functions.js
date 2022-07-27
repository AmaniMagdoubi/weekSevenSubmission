const Movie = require("./model"); 

exports.createMovie = async (movieObj) => {
    try {
        console.log(movieObj); 
        const newMovie = await Movie.create(movieObj); 
        console.log(newMovie);  
    } catch (error) {
        console.log(error);
        
    }
};

exports.readMovie = async (movieObj) => {
    try {
        const results = await Movie.find({title: movieObj.title})
    } catch (error) {
        console.log(error);
    }
}

exports.updateMovie = async (movieObj) => {
    try {
        const results = await Movie.updateOne({title: movieObj.title}, {actor: movieObj.newActor})
    } catch (error) {
        console.log(error);
    }
}
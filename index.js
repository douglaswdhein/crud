// Importing the express
const express = require('express');

const server = express();

server.use(express.json());

// Creating a variable to receive the movies
const movies = [
    { name: 'Captain America: The First Avenger', producer: 'Marvel Studios Columbia Pictures', year: 2011 },
    { name: 'Captain Marvel', producer: 'Marvel Studios Columbia Pictures', year: 2019 },
    { name: 'The Increbible Hulk', producer: 'Marvel Studios Columbia Pictures', year: 2008 },
    { name: 'Iron Man', producer: 'Marvel Studios Columbia Pictures', year: 2008 },
];

// POST - Used to create new movies
server.post('/movies', (req, res) => {  
    const { name, producer, year  } = req.body;
    const newMovie = { name, producer, year };
    movies.push(newMovie);

    return res.json(newMovie);
});

// GET - Returning information for all movies
server.get('/movies', (req, res) => {
    return res.json(movies);
});

// GET - Returning the information of a specific movie by id
server.get('/movies/:index', (req, res) => {
    const { index } = req.params;

    return res.json(movies[index]);
});

// PUT - Used to update a movie
server.put('/movies/:index', (req, res) => {
    const { index } = req.params;
    const updateMovie = req.body;

    movies[index] = updateMovie;

    return res.json(updateMovie);
});

// DELETE - Used to delete a movie
server.delete('/movies/:index', (req, res) => {
    const { index } = req.params;

    movies.splice(index, 1);

    return res.json({ message: "Movie deleted!" });
});

// Calling the server and setting a port
server.listen(3000);
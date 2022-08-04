const { Schema, model } = require('mongoose');


const VideogameSchema = Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,        
    },
    developer: {
        type: String,
        required: true
    },
    year: {
        type: Int32,
        required: true
    },
    consoles: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    active: {
        type: Boolean,
        required: true
    },
});

module.exports = model('Videogame', VideogameSchema);


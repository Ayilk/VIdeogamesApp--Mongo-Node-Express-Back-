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
    developers: [{
        type: String
    }],
    year: {
        type: Number,
        required: true
    },
    consoles: [{
        type: String
    }],
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


const { Schema, model, default: mongoose } = require('mongoose');


const VideogameSchema = Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,        
    },
    developers: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Developer'
        }
    ],
    year: {
        type: Number,
        required: true
    },
    consoles: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Console'
        }
    ],
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


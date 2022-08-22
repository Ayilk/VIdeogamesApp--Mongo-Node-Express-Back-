const { Schema, model, default: mongoose } = require('mongoose');


const ConsoleSchema = Schema({
    name: {
        type: String,
        required: true
    },    
    videogames: [
       {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Videogame'
       }
    ]
   
});

module.exports = model('Console', ConsoleSchema);
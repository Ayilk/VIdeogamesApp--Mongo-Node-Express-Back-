const { Schema, model } = require('mongoose');


const ConsoleSchema = Schema({
    name: {
        type: String,
        required: true
    },    
});

module.exports = model('Console', ConsoleSchema);
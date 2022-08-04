const { Schema, model } = require('mongoose');


const DeveloperSchema = Schema({
    name: {
        type: String,
        required: true
    },    
});

module.exports = model('Developer', DeveloperSchema);
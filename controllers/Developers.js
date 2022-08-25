const {response} = require('express');
const Developer = require('../models/Developer');

const getAllDevelopers = async(req, res) => {        
    Developer.find()
        .then(developers => res.json(developers))
}

const getDevById = (req, res) => {
    Developer.findById(req.params.id)
        .then(developer => res.send(developer))
        .catch(error => {
            console.log(error);
            res.send(error);
        })
}

const addManyDevelopers = (req, res) => {
    Developer.insertMany([
        { name: "SEGA"},
        { name: "Capcom"},
        { name: "id Software"},
        { name: "Capcom U.S.A"},
        { name: "Warner Bros. Interactive"},
        { name: "Bethesda Softworks"},
        { name: "THQ Nordic"},
        { name: "Feral Interactive"},
        { name: "Devolver Digital"},
        { name: "Telltale Games"},
        { name: "Electronic Arts"},
        { name: "NVIDIA Lightspeed Studios"},
        { name: "Ubisoft Montreal"},
        { name: "2K"},
        { name: "Sony Interactive Entertainment"},
        { name: "Ubisoft"},
        { name: "Valve Software"},
        { name: "BANDAI NAMCO Entertainment America"},
        { name: "Aspyr Media"},
        { name: "Square Enix"}
    ]).then(r => res.send("Posteo exitoso"))
    .catch(error => {
        console.log(error);
        res.json(error)
    })
}

module.exports = {
    getAllDevelopers,
    addManyDevelopers,
    getDevById
}
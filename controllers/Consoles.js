const {response} = require('express');
const Console = require('../models/Console');

const getAllConsoles = async(req, res) => {        
    Console.find()
        .then(consoles => res.json(consoles))
}

const getConsoleById = (req, res) => {
    Console.findById(req.params.id)
        .then(console => res.send(console))
        .catch(error => {
            console.log(error);
            res.json(error)
        })
}

const addManyConsoles = (req, res ) => {
    Console.insertMany([
        {name:"PC"},
        {name:"Xbox Series S/X"},
        {name:"PlayStation 5"},
        {name:"PlayStation 4"},
        {name:"Xbox One"},
        {name:"Nintendo Switch"},
        {name:"iOS"},
        {name:"Android"},
        {name:"Nintendo 3DS"},
        {name:"Nintendo DS"},
        {name:"Nintendo DSi"},
        {name:"macOS"},
        {name:"Linux"},
        {name:"Xbox 360"},
        {name:"Xbox"},
        {name:"PlayStation 3"},
        {name:"PlayStation 2"},
        {name:"PlayStation"},
        {name:"PS Vita"},
        {name:"PSP"},
        {name:"Wii U"},
        {name:"Wii"},
        {name:"GameCube"},
        {name:"Nintendo 64"},
        {name:"Game Boy Advance"},
        {name:"Game Boy Color"},
        {name:"Game Boy"},
        {name:"SNES"},
        {name:"NES"},
        {name:"Classic Macintosh"},
        {name:"Apple II"},
        {name:"Commodore / Amiga"},
        {name:"Atari 7800"},
        {name:"Atari 5200"},
        {name:"Atari Flashback"},
        {name:"Atari 2600"},
        {name:"Atari ST"},
        {name:"Atari 8-bit"},
        {name:"Atari Lynx"},
        {name:"Atari XEGS"},
        {name:"Genesis"},
        {name:"SEGA Saturn"},
        {name:"SEGA CD"},
        {name:"SEGA 32X"},
        {name:"SEGA Master System"},
        {name:"Dreamcast"},
        {name:"3DO"},
        {name:"Jaguar"},
        {name:"Game Gear"},
        {name:"Neo Geo"},
        {name:"Web"}
    ]).then(r => res.send("Posteo exitoso"))
    .catch(error => {
        console.log(error);
        res.json(error)
    })
}

module.exports = {
    getAllConsoles,
    addManyConsoles,
    getConsoleById
}
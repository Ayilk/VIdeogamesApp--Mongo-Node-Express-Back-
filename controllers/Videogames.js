const {response} = require('express');
const Videogame = require('../models/Videogame');


const addVideogames = async(req, res) => {
    const { name, description, developers, year, consoles, image, active} = req.body;
        
        try {
            //Crear usuario con el modelo
            const videogame = new Videogame(req.body);
    
            //Crear usuario de DB
            await videogame.save();
    
    
            //Generar respuesta exitosa
            return res.status(201).json({
                ok:true,
                uid: videogame.id,                
            })
    
    
        } catch (error) {
            console.log(error)
            return res.status(500).json({
                ok: false,
                msg: 'Por favor hable con el administrador',
            });
        }
        
}

const getAllGames = async(req, res) => {
    
        
        try {
           
    
    
        } catch (error) {
            console.log(error)
            return res.status(500).json({
                ok: false,
                msg: 'Por favor hable con el administrador',
            });
        }
        
}

module.exports = {
    addVideogames
}
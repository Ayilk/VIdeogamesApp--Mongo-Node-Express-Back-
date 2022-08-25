const {response} = require('express');
const Videogame = require('../models/Videogame');
const Console = require('../models/Console');
const Developer = require('../models/Developer');


const addVideogames = async(req, res) => {
    const { name, description, developers, year, consoles, image, active} = req.body;
        
        try {
            
            //Crear videogame con el modelo
            const videogame = new Videogame(req.body);
    
            const console = await  Console.findById(consoles);
            const developer = await Developer.findById(developers);

           console.videogames.push(videogame.name);           
           developer.videogames.push(videogame.name);
           
           await console.save();
           await developer.save();

           await videogame.save();

           res.send(videogame)

    
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
           Videogame.find().populate( 'consoles', 'developers')
            .then(videogames => res.json(videogames))
    
    
        } catch (error) {
            console.log(error)
            return res.status(500).json({
                ok: false,
                msg: 'Por favor hable con el administrador',
            });
        }
        
}

const getGameById = (req, res) => {
    //const id = req.parmas.id
    Videogame.findById(req.params.id)
        .then(videogame => {
            if(videogame){
                res.send(videogame)
            }else{res.send("No hay videojuego con ese id")}
        })
        .catch(error => {
            console.log(error);
            res.json(error)
        })
}

const updateVideogame = async(req, res) => {
    const { name, description, developers, year, consoles, image, active} = req.body;
        
        try {            
            
            const videogame = await Videogame.findOneAndUpdate(req.params.id, {
                name: name, description:description, developers:developers, year:year, consoles:consoles, image:image, active:active
            });           

            const console = await  Console.findById(consoles);
            const developer = await Developer.findById(developers);

           console.videogames.push(videogame.id);           
           developer.videogames.push(videogame.id);
           
           await console.save();
           await developer.save();

           

           res.send(videogame)

    
        } catch (error) {
            console.log(error)
            return res.status(500).json({
                ok: false,
                msg: 'Por favor hable con el administrador',
            });
        }
}

const deleteVideogame = (req, res) => {
    Videogame.findOneAndDelete(req.params.id)
        .then(response => res.status(200).send(response) )
        .catch(error => {
            console.log(error)
            return res.status(500).json({
                ok: false,
                msg: 'Por favor hable con el administrador',
            });
        })
}


module.exports = {
    addVideogames,
    getAllGames,
    getGameById, 
    updateVideogame,
    deleteVideogame
}

//consultas 
  //nombre
  //direccion
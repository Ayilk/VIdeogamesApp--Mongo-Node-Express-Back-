const {response} = require('express');
const Videogame = require('../models/Videogame');

const addVideogames = async(req, res) => {
    const { name, description, developers, year, consoles, image, active} = req.body;
        
        try {          
           
            const videogame = new Videogame(req.body);         

            await videogame.save();

            res.send(videogame)
    
        } catch (error) {
            console.log(error)
            return res.status(500).json({
                ok: false,
                msg: 'No se pudo agregar videojuego',
            });
        }
        
}

const getAllGames = async(req, res) => {    
        
        try {
           Videogame.find()
            .then(videogames => res.json(videogames))    
    
        } catch (error) {
            console.log(error)
            return res.status(500).json({
                ok: false,
                msg: 'No se pudieron cargar todos los videojuegos',
            });
        }
        
}

const getGameById = (req, res) => {
    //const id = req.parmas.id
    Videogame.findById(req.params.id)
        .then(videogame => {
            //console.log(videogame)
            if(videogame){
                res.send(videogame)
            }else{
                return res.status(200).json({
                ok: true,
                msg: 'No hay videojuego con ese ID',
            });}
        })
        .catch(error => {
            console.log(error);
            return res.status(500).json({
                ok: false,
                msg: 'No se pudo cargar el videojuego por ID',
            });
        })
}

const getGameByName = (req, res) => {
    const name = req.query.name;
    Videogame.find({name: {
        $regex: name,
        $options: "i"
    }})
        .then(videogame => {
            if(videogame){
                res.send(videogame)
            }else{res.send("No hay videojuego con ese Nombre")}
        })
        .catch(error => {
            console.log(error);
            return res.status(500).json({
                ok: false,
                msg: 'No se pudo cargar el videojuego por Nombre',
            });
        })
}

const updateVideogame = async(req, res) => {
    const { name, description, developers, year, consoles, image, active} = req.body;
        
        try {            
            
            const videogame = await Videogame.findOneAndUpdate(req.params.id, { name, description, developers, year, consoles, image, active});           

            await videogame.save();           

           res.send(videogame)
    
        } catch (error) {
            console.log(error)
            return res.status(500).json({
                ok: false,
                msg: 'No se pudo actualizar videojuego',
            });
        }
}

const deleteVideogame = (req, res) => {
    Videogame.findOneAndDelete(req.params.id)
        .then(response => res.status(200).send("Se eliminó el videojuego exitosamente") )
        .catch(error => {
            console.log(error)
            return res.status(500).json({
                ok: false,
                msg: 'No se pudo eliminar videojuego',
            });
        })
}


module.exports = {
    addVideogames,
    getAllGames,
    getGameById, 
    updateVideogame,
    deleteVideogame,
    getGameByName
}

//consultas 
  //nombre
  //direccion
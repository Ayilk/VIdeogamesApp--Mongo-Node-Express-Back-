const express = require('express');
const cors = require('cors');
const { dbConnection } = require('./db/config');
require('dotenv').config();
const routes = require('./routes/index.js');


//console.log(process.env);


//Crear servidor/aplicacion de express
const app = express();

//Conexión a la base de datos
dbConnection();

//Directorio Publico
app.use(express.static('./public'))

//CORS
app.use(cors())

//Lectura y parseo del body
app.use(express.json());

//Rutas
//app.use('/api/auth', require('./routes/auth'));
app.use('/api', routes);

//GET
// app.get('/', (req, res) => {
//     res.status(200).json({
//         ok: true,
//         msg: 'Ruta principal conectada exitosamente',
//         uid: 1234
//     })
    
// })
//Manejar otras rutas
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'public/index.html'))
})

app.listen(process.env.PORT, () => {
    console.log(`Servidor corriendo en puerto ${ process.env.PORT }`)
})
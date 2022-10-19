const express = require('express'),
    servidor = express(),
    dotenv = require('dotenv');

    dotenv.config();

    const port = process.env.port;

    servidor.listen(port, () =>{
        console.log(`Estamos en el puerto ${port}`)
    })
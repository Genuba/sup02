const express = require('express');
const morgan = require('morgan');//middleware procesa datos antes que servidor reciba

//  settings 
    const app = express();
    app.set('port', process.env.PORT || 3000);
    app.set('json spaces', 2);

//  starting the server 
    app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
    });

//  middlewares
    app.use(function(req, res, next) {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
        res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
        res.header('Allow', 'GET, POST, PUT, DELETE');
        next();
     });

    app.use(morgan('dev'));// formato dev que da informacion que datos responde con el inicio del servidor
    app.use(express.urlencoded({extended: false}));//metodo para aplicacion externa que envia datos a traves de formularios y lo entienda, 
    //con una propiedad extended: false para entender los datos que vienen de los formularios inputs 
    app.use(express.json());// metodo recibe formatos json

// routes
    app.use('/api/usuario',require('./routes/usuario'));
    app.use('/api/usuarios',require('./routes/usuarios'));
    app.use('/api/menu',require('./routes/menu'));
    app.use('/api/login',require('./routes/login'));
    app.delete('/api/logout', (req, res, next) => {
        return res.status(204).json({});
    });
const express = require('express');
const morgan = require('morgan');//middleware procesa datos antes que servidor reciba

//  settings 
    const app = express();
    app.set('port', process.env.PORT || 3100);
    app.set('json spaces', 2);

//  starting the server 
    app.listen(app.get('port'), () => {
    console.log(`Server on port 3100`);
    });

//  middlewares
    app.use(function(req, res, next) {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
        res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
        res.header('Allow', 'GET, POST, PUT, DELETE');
        next();
    });

    app.use(morgan('dev'));
    app.use(express.urlencoded({extended: false}));
    app.use(express.json());

// routes
    app.use('/api/receiver',require('./routes/receiver'));
    app.use('/api/receivers',require('./routes/receivers'));
    app.use('/api/type',require('./routes/typedoc'));
    app.use('/api/types',require('./routes/typesdoc'));
    app.use('/api/doc',require('./routes/doc'));
    app.use('/api/docs',require('./routes/docs')); 
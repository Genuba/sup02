const{ Router }= require ('express');
const router = Router();
const pool = require('../database.js');
const jwt = require('jsonwebtoken');
require('dotenv').config();

router.post('/', async (req, res) => {
        try{
            const {usuario, password} = await req.body;
            if(usuario && password){ 

                var crypto = require('crypto')
                var hashedPassword = crypto.createHmac('sha1', usuario).update(password).digest('hex')

                console.log(hashedPassword);

                const resdb = await pool.query
                ("SELECT * FROM us_fu_autenticacion ('"+usuario+"','"+hashedPassword+"')");//consulta asincrona 
                var obj = JSON.parse(JSON.stringify(resdb.rows))[0]
                var respuesta = {"to_ge_rta": obj[Object.keys(obj)[0]],"token":""}
                const idUsuario = respuesta.to_ge_rta['rta_val']

                if(idUsuario != null){
                    const token = jwt.sign ({ id: idUsuario }, process.env.JWT_SECRET_KEY)
                    respuesta.token = token

                    res.json(respuesta);
                } else {
                    res.status(401).send('Ingreso incorrecto');
                }
            }else{
                console.log(req.body);
            }
        }
        catch(e){
            console.log(e);
        }
    });
    

    module.exports = router;
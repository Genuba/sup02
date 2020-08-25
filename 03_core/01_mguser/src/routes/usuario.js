const{ Router }= require ('express');
const router = Router();
const pool =require('../database.js');
const verify = require('../verifyToken.js');
 
router.post('/',verify,async (req, res) => {
    try{
        const {user_user,user_alias,user_pswd,psna_nomb, psna_apdo, psna_ndoc, psna_dirc,psna_telf,psna_email, rol_rol, rol_nomb}= await req.body;
        
        if(user_alias && user_pswd && psna_nomb && psna_apdo && psna_ndoc && psna_dirc && psna_telf && psna_email && rol_rol){ 
            
            //Hash password
            var crypto = require('crypto')
            var hashedPassword = crypto.createHmac('sha1', user_alias).update(user_pswd).digest('hex')

            //Add user db
            const resdb = await pool.query
            ("SELECT us_fu_agregarusuario(('"+user_user+"','"+user_alias+"','"+hashedPassword+"','"+psna_nomb+"', '"+psna_apdo+"', '"+psna_ndoc+"', '"+psna_dirc+"','"+psna_telf+"','"+psna_email+"', '"+rol_rol+"', '"+rol_nomb+"'))");
            var obj = JSON.parse(JSON.stringify(resdb.rows))[0]
                var respuesta = {"to_ge_rta": obj[Object.keys(obj)[0]]}
                res.json(respuesta);
            }else{
            console.log("error");
        }
    }
    catch(e){
        console.log(e);
    }
})

router.get('/:id',verify, async (req, res) => { 
    try{
        var id = req.params.id;
        const resdb = await pool.query("SELECT * FROM us_fu_consultausuario("+id+")")
        var obj = JSON.parse(JSON.stringify(resdb.rows))[0]
        res.json(obj)[0];
    }
    catch(e){
        console.log(e);
    }
})

router.put('/:id',verify, async (req, res) => { 
    try{
        const {psna_dirc,psna_telf,psna_email, rol_rol}= await req.body;
        var id = req.params.id;
        const resdb = await pool.query("SELECT * FROM us_fu_updateusuario('"+id+"','"+psna_dirc+"','"+psna_telf+"','"+psna_email+"', '"+rol_rol+"')");
        var obj = JSON.parse(JSON.stringify(resdb.rows))[0]
        var respuesta = {"to_ge_rta": obj[Object.keys(obj)[0]]}
        res.json(respuesta);
    }
    catch(e){ 
        console.log(e);
    } 
}) 

router.delete('/:id', async (req, res) => { 
    try{
        var id = req.params.id;
        const resdb = await pool.query("SELECT * FROM us_fu_deleteusuario('"+id+"')");
        var obj = JSON.parse(JSON.stringify(resdb.rows))[0]
        var respuesta = {"to_ge_rta": obj[Object.keys(obj)[0]]}
        res.json(respuesta);
    }
    catch(e){
        console.log(e);
    } 
}) 

module.exports = router;
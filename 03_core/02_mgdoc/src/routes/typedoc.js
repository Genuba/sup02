const{ Router }= require ('express');
const router = Router();
const pool =require('../database.js');
const verify = require('../verifyToken.js');
 
router.post('/',verify, async (req, res) => {
    try{
        const {type_type, type_class, type_name, type_code, type_rute}= await req.body;
        if(type_class && type_name && type_code){ 
            const resdb = await pool.query
            ("SELECT gd_fu_addtype(('"+type_type+"','"+type_class+"','"+type_name+"','"+type_code+"', '"+type_rute+"'))");
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

module.exports = router;
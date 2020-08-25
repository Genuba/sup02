const{ Router }= require ('express');
const router = Router();
const pool = require('../database.js');
const verify = require('../verifyToken.js')

router.get('/',verify, async (req, res) => {
    try{
        //const resdb = await pool.query("SELECT user_user, user_alias, psna_ndoc, psna_nomb, psna_apdo, psna_dirc, psna_telf,psna_email, rol_nomb FROM us_tuser INNER JOIN us_tpsna ON  user_user = psna_user INNER JOIN us_tpusr ON purs_user = user_user INNER JOIN us_trol ON  purs_rol = rol_rol")
        const resdb = await pool.query("SELECT * FROM us_fu_consultausuarios()")
        //console.log(resdb.rows)
        var obj = JSON.parse(JSON.stringify(resdb.rows))
        res.json(obj);
        //"SELECT * FROM us_fu_consultausuarios()"
    }
    catch(e){
        console.log(e);
    }
})
 
module.exports = router;
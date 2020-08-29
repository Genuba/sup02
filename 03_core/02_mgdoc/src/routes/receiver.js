const{ Router }= require ('express');
const router = Router();
const pool =require('../database.js');

router.post('/', async (req, res) => {
    try{ 
        const {rec_rec,rec_name, rec_address, rec_email, rec_desc, rec_telf}= await req.body;
        if(rec_name && rec_email && rec_desc){ 
            const resdb = await pool.query
            ("SELECT gd_fu_addreceiver(('"+rec_rec+"','"+rec_name+"','"+rec_address+"','"+rec_email+"', '"+rec_desc+"', '"+rec_telf+"'))");
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
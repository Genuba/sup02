const{ Router }= require ('express');
const router = Router();
const pool = require('../database.js');

router.get('/',async (req, res) => {
    try{
        const resdb = await pool.query("SELECT * FROM gd_fu_consultatypes()")
        var obj = JSON.parse(JSON.stringify(resdb.rows))
        res.json(obj);
    }
    catch(e){ 
        console.log(e);
    }
})
 
module.exports = router;
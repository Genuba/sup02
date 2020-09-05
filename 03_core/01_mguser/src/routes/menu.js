const{ Router }= require ('express');
const router = Router();
const pool =require('../database.js');
const verify = require('../verifyToken.js');
 
router.get('/:rol',verify, async (req, res) => { 
    try{
        var rol_rol = req.params.rol;
        
        if(rol_rol){ 

            var query = "SELECT mo.modu_modu,mo.modu_name,mo.modu_icon,se.serv_name,se.serv_link \
                        FROM ms_tmodu mo \
                        inner join ms_tserv se ON se.serv_modu = mo.modu_modu \
                        inner join ms_tperse pe ON pe.perse_serv = se.serv_serv \
                        inner join ms_trlsv rl ON rl.rlsv_perse = pe.perse_perse \
                        GROUP by mo.modu_modu,mo.modu_name,mo.modu_icon,se.serv_name,se.serv_link,rl.rlsv_rol \
                        having rl.rlsv_rol = "+rol_rol

            //Add user db
            const resdb = await pool.query(query);
            var modulos = [],childrens = []
            
            for (i = 0; i < resdb.rows.length; i++) {
                var children = {}

                children.title = resdb.rows[i]["serv_name"]
                children.link = resdb.rows[i]["serv_link"]
                childrens.push(children)

                if(i < (resdb.rows.length - 1) && resdb.rows[i]["modu_modu"] !=  resdb.rows[i+1]["modu_modu"]){
                    var modulo = {}
                    modulo.title = resdb.rows[i]["modu_name"]
                    modulo.icon = resdb.rows[i]["modu_icon"]
                    modulo.children = childrens
                    
                    modulos.push(modulo)
                    childrens = []
                } else if(i == (resdb.rows.length - 1)){
                    var modulo = {}
                    modulo.title = resdb.rows[i]["modu_name"]
                    modulo.icon = resdb.rows[i]["modu_icon"]
                    modulo.children = childrens
                    
                    modulos.push(modulo)
                }
            }

            res.json(modulos);

            }else{
            console.log("error");
        }
    }
    catch(e){
        console.log(e);
    }
})

router.post('/',verify,async (req, res) => {
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

module.exports = router;
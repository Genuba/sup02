const{ Router }= require ('express');
const router = Router();
const pool =require('../database.js');

router.post('/', async (req, res) => {
    try{
        const {doc_doc,doc_asunto, doc_user, doc_review, doc_sender, doc_send, doc_code, doc_cons, doc_rec, doc_rute, doc_type, doc_cod}= await req.body;
        if(doc_asunto && doc_user && doc_send && doc_rec && doc_type){ 
            const resdb = await pool.query
            ("SELECT ab_web_gd.gd_fu_adddoc(('"+doc_doc+"','"+doc_asunto+"','"+doc_user+"','"+doc_review+"', '"+doc_sender+"', '"+doc_send+"', '"+doc_code+"', '"+doc_cons+"', '"+doc_rec+"', '"+doc_rute+"', '"+doc_type+"',' "+doc_cod+"'))");
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

router.get('/', async (req, res) => {
    try{
        const resdb = await pool.query("SELECT type_type, type_class FROM ab_web_gd.gd_ttype")
        var obj = JSON.parse(JSON.stringify(resdb.rows))
        res.json(obj);
        }
    catch(e){
        console.log(e);
    }
})
/*
router.get('/', async (req, res) => {
    try{
        const resdb = await pool.query("SELECT rec_rec, rec_name FROM ab_web_gd.gd_treceiver")
        var obj = JSON.parse(JSON.stringify(resdb.rows))
        res.json(obj);
        }
    catch(e){
        console.log(e);
    }
})
*/

module.exports = router;
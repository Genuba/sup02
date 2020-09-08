-- FUNCTION: ab_web_gd.gd_fu_consultadoc(integer)

-- DROP FUNCTION ab_web_gd.gd_fu_consultadoc(integer);

CREATE OR REPLACE FUNCTION ab_web_gd.gd_fu_consultadoc(
	i integer)
    RETURNS SETOF ab_web_gd.to_fu_doc 
    LANGUAGE 'plpgsql'

    COST 100
    VOLATILE 
    ROWS 1000
    
AS $BODY$
DECLARE
    reg RECORD;
BEGIN
	FOR REG IN SELECT doc_doc, doc_asunto, doc_user, doc_send, doc_code, doc_cons, doc_rute, doc_type, doc_cod FROM ab_web_gd.gd_tdoc
	WHERE doc_doc = i
	LOOP
    RETURN NEXT reg;
    END LOOP;
    RETURN;
end
$BODY$;

ALTER FUNCTION ab_web_gd.gd_fu_consultadoc(integer)
    OWNER TO ab_web_gd;
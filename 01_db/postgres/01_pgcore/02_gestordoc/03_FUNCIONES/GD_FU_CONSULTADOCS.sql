-- FUNCTION: gd_fu_consultadocs()

-- DROP FUNCTION gd_fu_consultadocs();

CREATE OR REPLACE FUNCTION gd_fu_consultadocs(
	)
    RETURNS SETOF to_fu_doc 
    LANGUAGE 'plpgsql'

    COST 100
    VOLATILE 
    ROWS 1000
    
AS $BODY$
DECLARE
		reg RECORD;
	BEGIN
		FOR REG IN SELECT doc_doc, doc_date, doc_asunto, doc_user, doc_send, doc_code, doc_cons, doc_rute, doc_type, doc_cod FROM gd_tdoc
		LOOP
		RETURN NEXT reg;
		END LOOP;
		RETURN;
	end
$BODY$;

ALTER FUNCTION gd_fu_consultadocs()
    OWNER TO ab_web_gd;

-- FUNCTION: ab_web_gd.gd_fu_consultadocs()

-- DROP FUNCTION ab_web_gd.gd_fu_consultadocs();

CREATE OR REPLACE FUNCTION ab_web_gd.gd_fu_consultadocs(
	)
    RETURNS SETOF ab_web_gd.to_fu_doc 
    LANGUAGE 'plpgsql'

    COST 100
    VOLATILE 
    ROWS 1000
    
AS $BODY$
DECLARE
		reg RECORD;
	BEGIN
		FOR REG IN SELECT doc_doc, doc_asunto, doc_user, doc_code, doc_cons, doc_type, doc_cod FROM ab_web_gd.gd_tdoc

		LOOP
		RETURN NEXT reg;
		END LOOP;
		RETURN;
	end
$BODY$;

ALTER FUNCTION ab_web_gd.gd_fu_consultadocs()
    OWNER TO ab_web_gd;
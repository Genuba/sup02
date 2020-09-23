-- FUNCTION: ab_web_gd.gd_fu_adddoc(ab_web_gd.to_fu_doc)

-- DROP FUNCTION ab_web_gd.gd_fu_adddoc(ab_web_gd.to_fu_doc);

CREATE OR REPLACE FUNCTION gd_fu_adddoc(
	p_to_doc to_fu_doc)
    RETURNS json
    LANGUAGE 'plpgsql'

    COST 100
    VOLATILE 
    
AS $BODY$
	DECLARE
		v_mensaje to_ge_rta%ROWTYPE;
		v_date character varying (50);
		v_codedoc character varying (30);
		v_code character varying (30);
		v_consdoc integer;
	BEGIN
		IF EXISTS (SELECT doc_doc FROM gd_tdoc WHERE doc_asunto = p_to_doc.doc_asunto)
		THEN
			v_mensaje.rta_msn := 'ya existe un Documento con el mismo asunto';
			v_mensaje.rta_boo := 0;
		ELSE 
			v_date := (SELECT current_timestamp);
			v_consdoc := (SELECT (COALESCE ((SELECT MAX ("doc_cons") FROM gd_tdoc WHERE doc_type = p_to_doc.doc_type), 0)))+1;
			v_codedoc := (SELECT type_code FROM gd_ttype WHERE type_type = p_to_doc.doc_type);
			v_code := (SELECT (v_codedoc || v_consdoc) AS code);
			INSERT INTO gd_tdoc (doc_date, doc_asunto, doc_user, doc_send, doc_code, doc_cons, doc_rute, doc_type, doc_cod) 
			VALUES (v_date, p_to_doc.doc_asunto, p_to_doc.doc_user, 
					p_to_doc.doc_send, v_codedoc, v_consdoc, 
					p_to_doc.doc_rute, p_to_doc.doc_type, v_code);
			v_mensaje.rta_msn := 'Documento creado código '|| v_code ::text;
			v_mensaje.rta_boo := 1;
			
		END IF;
		RETURN row_to_json(v_mensaje);
	END;
$BODY$;

ALTER FUNCTION gd_fu_adddoc(to_fu_doc)
    OWNER TO ab_web_gd;

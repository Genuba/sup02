-- FUNCTION: gd_fu_addreceiver(to_fu_receiver)

-- DROP FUNCTION gd_fu_addreceiver(to_fu_receiver);

CREATE OR REPLACE FUNCTION gd_fu_addreceiver(
	p_to_receiver to_fu_receiver)
    RETURNS json
    LANGUAGE 'plpgsql'

    COST 100
    VOLATILE 
    
AS $BODY$
	DECLARE
		v_mensaje to_ge_rta%ROWTYPE;
	BEGIN
		IF EXISTS (SELECT rec_rec FROM gd_treceiver WHERE rec_name = p_to_receiver.rec_name)
		THEN
			v_mensaje.rta_msn := 'receptor ya existe';
			v_mensaje.rta_boo := 0;
		ELSE
			INSERT INTO gd_treceiver (rec_name, rec_address, rec_email, rec_desc, rec_telf) VALUES (p_to_receiver.rec_name, p_to_receiver.rec_address, p_to_receiver.rec_email, p_to_receiver.rec_desc, p_to_receiver.rec_telf);
			v_mensaje.rta_msn := 'receptor creado';
			v_mensaje.rta_boo := 1;
			
		END IF;
		RETURN row_to_json(v_mensaje);
	END;
$BODY$;

ALTER FUNCTION gd_fu_addreceiver(to_fu_receiver)
    OWNER TO ab_web_gd;
-- FUNCTION: ab_web_gd.gd_fu_addtype(ab_web_gd.to_fu_type)

-- DROP FUNCTION ab_web_gd.gd_fu_addtype(ab_web_gd.to_fu_type);

CREATE OR REPLACE FUNCTION gd_fu_addtype(
	p_to_type to_fu_type)
    RETURNS json
    LANGUAGE 'plpgsql'

    COST 100
    VOLATILE 
    
AS $BODY$
	DECLARE
		v_mensaje to_ge_rta%ROWTYPE;
	BEGIN
		IF EXISTS (SELECT type_type FROM gd_ttype WHERE type_code = p_to_type.type_code)
		THEN
			v_mensaje.rta_msn := 'El código ya existe';
			v_mensaje.rta_boo := 0;
		ELSE
			INSERT INTO gd_ttype (type_class, type_name, type_code, type_rute) VALUES ( p_to_type.type_class, p_to_type.type_name, p_to_type.type_code, p_to_type.type_rute);
			v_mensaje.rta_msn := 'Tipo creado';
			v_mensaje.rta_boo := 1;
			
		END IF;
		RETURN row_to_json(v_mensaje);
	END;
$BODY$;

ALTER FUNCTION gd_fu_addtype(to_fu_type)
    OWNER TO ab_web_gd;
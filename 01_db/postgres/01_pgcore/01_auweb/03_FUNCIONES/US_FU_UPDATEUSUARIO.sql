-- FUNCTION: us_fu_updateusuario(integer, CHARACTER varying, CHARACTER varying, CHARACTER varying, integer)

CREATE OR REPLACE FUNCTION us_fu_updateusuario(
	i integer,
	dirc CHARACTER varying,
	telf CHARACTER varying,
	email CHARACTER varying,
	rol integer)
    RETURNS json
    LANGUAGE 'plpgsql'

    COST 100
    VOLATILE 
    
AS $BODY$
DECLARE
		v_mensaje to_ge_rta%rowtype;
BEGIN
		IF EXISTS (SELECT user_alias FROM US_TUSER WHERE user_user = i) THEN
		UPDATE us_tpsna SET psna_dirc = dirc, psna_telf = telf, psna_email = email where psna_user = i;
		UPDATE us_tuser SET user_rol = rol where user_user = i;
		v_mensaje.rta_msn := 'Usuario actualizado';
		v_mensaje.rta_boo := 1;
		ELSE
		v_mensaje.rta_msn := 'usuario no existe';
		v_mensaje.rta_boo := 0;
		END IF;
	
	RETURN row_to_json(v_mensaje);
	END;
$BODY$;

ALTER FUNCTION us_fu_updateusuario(integer, CHARACTER varying, CHARACTER varying, CHARACTER varying, integer)
    OWNER TO ab_auth_us;

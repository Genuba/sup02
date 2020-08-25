-- FUNCTION: us_fu_deleteusuario(integer)

CREATE OR REPLACE FUNCTION us_fu_deleteusuario(
	i integer)
    RETURNS json
    LANGUAGE 'plpgsql'

    COST 100
    VOLATILE 
    
AS $BODY$
declare
		v_mensaje to_ge_rta%rowtype;
BEGIN
	IF EXISTS (SELECT user_alias FROM US_TUSER 
			   WHERE user_user = i) AND  i != 1
	THEN
	DELETE FROM us_tpsna WHERE psna_user = i;
	DELETE FROM us_tuser WHERE user_user = i;
	v_mensaje.rta_msn := 'usuario borrado';
	v_mensaje.rta_boo := 1;
    ELSE
	v_mensaje.rta_msn := 'usuario no existe';
	v_mensaje.rta_boo := 0;
	END IF;
	RETURN row_to_json(v_mensaje);
END
$BODY$;

ALTER FUNCTION us_fu_deleteusuario(integer)
    OWNER TO ab_auth_us;
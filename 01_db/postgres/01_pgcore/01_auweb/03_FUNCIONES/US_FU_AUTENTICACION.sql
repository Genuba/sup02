-- FUNCTION: us_fu_autenticacion(text, text)

CREATE OR REPLACE FUNCTION us_fu_autenticacion(
	p_user_alias text,
	p_user_pswd text)
    RETURNS json
    LANGUAGE 'plpgsql'

    COST 100
    VOLATILE 
    
AS $BODY$
	declare
		p_mensaje to_ge_rta%rowtype;
	Begin

		select user_user into p_mensaje.rta_val from US_TUSER where user_alias = p_user_alias and user_pswd = p_user_pswd;
		IF p_mensaje.rta_val > 0
		then
			p_mensaje.rta_msn := 'Ingreso satisfactorio';
			p_mensaje.rta_boo := 1;
		ELSE
			p_mensaje.rta_msn := 'ingreso erroneo';
			p_mensaje.rta_boo := 0;
		end if;
		
		return row_to_json(p_mensaje);
	END;
$BODY$;

ALTER FUNCTION us_fu_autenticacion(text, text)
    OWNER TO ab_auth_us;
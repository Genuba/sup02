-- FUNCTION: us_fu_agregarusuario(to_fu_user)

CREATE OR REPLACE FUNCTION us_fu_agregarusuario(
	p_to_usuario to_fu_user)
    RETURNS json
    LANGUAGE 'plpgsql'

    COST 100
    VOLATILE 
    
AS $BODY$
	declare
		v_mensaje to_ge_rta%rowtype;
		v_idusuario integer;
	Begin
		IF EXISTS (select user_user from US_TUSER where user_alias = p_to_usuario.user_alias)
		then
			v_mensaje.rta_msn := 'usuario ya existe';
			v_mensaje.rta_boo := 0;
		ELSE
			INSERT INTO us_tuser (user_alias, user_pswd, user_rol) VALUES ( p_to_usuario.user_alias, p_to_usuario.user_pswd,p_to_usuario.rol_rol);
			v_idusuario := currval(pg_get_serial_sequence('us_tuser','user_user'));
			INSERT INTO us_tpsna (psna_ndoc, psna_nomb, psna_apdo, psna_dirc, psna_telf,psna_email,psna_user) VALUES (p_to_usuario.psna_ndoc, p_to_usuario.psna_nomb, p_to_usuario.psna_apdo, p_to_usuario.psna_dirc, p_to_usuario.psna_telf,p_to_usuario.psna_email, v_idusuario);
			
			v_mensaje.rta_msn := 'usuario creado';
			v_mensaje.rta_boo := 1;
		end if;
		
		return row_to_json(v_mensaje);
	END;
$BODY$;

ALTER FUNCTION us_fu_agregarusuario(to_fu_user)
    OWNER TO ab_auth_us;
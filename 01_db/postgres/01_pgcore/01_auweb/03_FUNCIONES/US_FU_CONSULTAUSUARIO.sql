-- FUNCTION: us_fu_consultausuario(integer)

CREATE OR REPLACE FUNCTION us_fu_consultausuario(
	i integer)
    RETURNS SETOF to_fu_user 
    LANGUAGE 'plpgsql'

    COST 100
    VOLATILE 
    ROWS 1000
    
AS $BODY$
DECLARE
    reg RECORD;
BEGIN
	FOR REG IN SELECT user_user, user_alias,null::CHARACTER varying(40), psna_nomb, psna_apdo, psna_ndoc, psna_dirc, psna_telf,psna_email, rol_rol, rol_nomb
	FROM us_tuser 
    INNER JOIN us_tpsna ON  user_user = psna_user 
    INNER JOIN us_trol ON  user_rol = rol_rol 
	WHERE user_user = i
	LOOP
    RETURN NEXT reg;
    END LOOP;
    RETURN;
end
$BODY$;

ALTER FUNCTION us_fu_consultausuario(integer)
    OWNER TO ab_auth_us;

-- FUNCTION: ab_web_gd.gd_fu_consultatypes()

-- DROP FUNCTION ab_web_gd.gd_fu_consultatypes();

CREATE OR REPLACE FUNCTION ab_web_gd.gd_fu_consultatypes(
	)
    RETURNS SETOF ab_web_gd.to_fu_type 
    LANGUAGE 'plpgsql'

    COST 100
    VOLATILE 
    ROWS 1000
    
AS $BODY$
DECLARE
		reg RECORD;
	BEGIN
		FOR REG IN SELECT type_type, type_class, type_name, type_code, type_rute FROM ab_web_gd.gd_ttype

		LOOP
		RETURN NEXT reg;
		END LOOP;
		RETURN;
	end
$BODY$;

ALTER FUNCTION ab_web_gd.gd_fu_consultatypes()
    OWNER TO ab_web_gd;

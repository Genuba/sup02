-- FUNCTION: ab_web_gd.gd_fu_consultareceivers()

-- DROP FUNCTION ab_web_gd.gd_fu_consultareceivers();

CREATE OR REPLACE FUNCTION ab_web_gd.gd_fu_consultareceivers(
	)
    RETURNS SETOF ab_web_gd.to_fu_receiver 
    LANGUAGE 'plpgsql'

    COST 100
    VOLATILE 
    ROWS 1000
    
AS $BODY$
DECLARE
		reg RECORD;
	BEGIN
		FOR REG IN SELECT rec_rec, rec_name, rec_address, rec_email, rec_desc, rec_telf FROM ab_web_gd.gd_treceiver

		LOOP
		RETURN NEXT reg;
		END LOOP;
		RETURN;
	end
$BODY$;

ALTER FUNCTION ab_web_gd.gd_fu_consultareceivers()
    OWNER TO ab_web_gd;

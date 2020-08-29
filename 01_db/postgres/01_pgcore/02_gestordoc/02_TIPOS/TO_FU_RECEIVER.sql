-- Type: to_fu_receiver

-- DROP TYPE ab_web_gd.to_fu_receiver;

CREATE TYPE to_fu_receiver AS
(
	rec_rec integer,
	rec_name character varying(30),
	rec_address character varying(70),
	rec_email character varying(30),
	rec_desc character varying(500),
	rec_telf character varying(30)
);

ALTER TYPE to_fu_receiver
    OWNER TO ab_web_gd;

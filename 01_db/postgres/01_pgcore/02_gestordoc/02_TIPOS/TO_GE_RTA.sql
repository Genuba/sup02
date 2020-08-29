-- Type: to_ge_rta

-- DROP TYPE ab_web_gd.to_ge_rta;

CREATE TYPE to_ge_rta AS
(
	rta_val integer,
	rta_boo boolean,
	rta_msn text
);

ALTER TYPE to_ge_rta
    OWNER TO ab_web_gd;

-- Type: to_ge_rta

CREATE TYPE to_ge_rta AS
(
	rta_val integer,
	rta_boo boolean,
	rta_msn text
);

ALTER TYPE to_ge_rta
    OWNER TO ab_auth_us;

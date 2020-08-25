-- Type: to_fu_user

CREATE TYPE to_fu_user AS
(
	user_user integer,
	user_alias CHARACTER varying(30),
	user_pswd CHARACTER varying(40),
	psna_nomb CHARACTER varying(30),
	psna_apdo CHARACTER varying(30),
	psna_ndoc CHARACTER varying(30),
	psna_dirc CHARACTER varying(50),
	psna_telf CHARACTER varying(30),
	psna_email CHARACTER varying(30),
	rol_rol integer,
	rol_nomb CHARACTER varying(20)
);

ALTER TYPE to_fu_user
    OWNER TO ab_auth_us;

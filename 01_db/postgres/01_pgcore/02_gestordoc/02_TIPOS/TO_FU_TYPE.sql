-- Type: to_fu_type

-- DROP TYPE ab_web_gd.to_fu_type;

CREATE TYPE to_fu_type AS
(
	type_type integer,
	type_class character varying(30),
	type_name character varying(30),
	type_code character varying(30),
	type_rute character varying(150)
);

ALTER TYPE to_fu_type
    OWNER TO ab_web_gd;

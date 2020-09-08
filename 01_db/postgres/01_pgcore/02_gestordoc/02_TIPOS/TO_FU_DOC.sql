-- Type: to_fu_doc

-- DROP TYPE ab_web_gd.to_fu_doc;

CREATE TYPE to_fu_doc AS
(
	doc_doc integer,
	doc_asunto character varying(30),
	doc_user character varying(30),
	doc_send character varying(30),
	doc_code character varying(30),
	doc_cons integer,
	doc_rute character varying(30),
	doc_type integer,
	doc_cod character varying(30)
);

ALTER TYPE to_fu_doc
    OWNER TO ab_web_gd;
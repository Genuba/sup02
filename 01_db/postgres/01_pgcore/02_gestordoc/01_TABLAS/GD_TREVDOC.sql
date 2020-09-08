-- Table: gd_trevdoc

-- DROP TABLE gd_trevdoc;

CREATE TABLE gd_trevdoc
(
    rev_rev integer NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1 ),
    rev_doc INTEGER NULL,
    rev_user INTEGER NULL,
    CONSTRAINT pk_rev_rev PRIMARY KEY (rev_rev)
)

TABLESPACE pg_default;

ALTER TABLE gd_trevdoc
    OWNER to ab_web_gd;

COMMENT ON TABLE GD_TREVDOC
	IS 'Tabla enlazar revisores y documentos'
;
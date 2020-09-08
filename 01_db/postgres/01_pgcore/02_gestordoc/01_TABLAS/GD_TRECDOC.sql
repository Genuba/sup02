-- Table: gd_trecdoc

-- DROP TABLE gd_trecdoc;

CREATE TABLE gd_trecdoc
(
    rcd_rcd integer NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1 ),
    rcd_doc INTEGER NULL,
    rcd_user INTEGER NULL,
    CONSTRAINT pk_rcd_rcd PRIMARY KEY (rcd_rcd)
)

TABLESPACE pg_default;

ALTER TABLE gd_trecdoc
    OWNER to ab_web_gd;

COMMENT ON TABLE GD_TRECDOC
	IS 'Tabla enlazar receptores y documentos'
;
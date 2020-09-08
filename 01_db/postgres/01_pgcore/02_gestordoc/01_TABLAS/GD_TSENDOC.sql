-- Table: gd_tsendoc

-- DROP TABLE gd_tsendoc;

CREATE TABLE gd_tsendoc
(
    sen_sen integer NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1 ),
    sen_doc INTEGER NULL,
    sen_user INTEGER NULL,
    CONSTRAINT pk_sen_sen PRIMARY KEY (sen_sen)
)

TABLESPACE pg_default;

ALTER TABLE gd_tsendoc
    OWNER to ab_web_gd;

COMMENT ON TABLE GD_TSENDOC
	IS 'Tabla enlazar emisores y documentos'
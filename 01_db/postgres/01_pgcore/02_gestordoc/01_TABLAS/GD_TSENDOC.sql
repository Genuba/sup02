-- Table: gd_tsendoc

-- DROP TABLE gd_tsendoc;

CREATE TABLE gd_tsendoc
(
    sen_sen integer NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1 ),
    sen_doc integer,
    sen_user integer,
    CONSTRAINT pk_sen_sen PRIMARY KEY (sen_sen),
    CONSTRAINT sen_doc FOREIGN KEY (sen_doc)
        REFERENCES gd_tdoc (doc_doc) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID
)

TABLESPACE pg_default;

ALTER TABLE gd_tsendoc
    OWNER to ab_web_gd;

COMMENT ON TABLE gd_tsendoc
    IS 'Tabla enlazar emisores y documentos';
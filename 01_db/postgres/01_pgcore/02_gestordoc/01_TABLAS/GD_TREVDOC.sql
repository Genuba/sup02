-- Table: ab_web_gd.gd_trevdoc

-- DROP TABLE ab_web_gd.gd_trevdoc;

CREATE TABLE ab_web_gd.gd_trevdoc
(
    rev_rev integer NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1 ),
    rev_doc integer,
    rev_user integer,
    CONSTRAINT pk_rev_rev PRIMARY KEY (rev_rev),
    CONSTRAINT rev_doc FOREIGN KEY (rev_doc)
        REFERENCES ab_web_gd.gd_tdoc (doc_doc) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)

TABLESPACE pg_default;

ALTER TABLE ab_web_gd.gd_trevdoc
    OWNER to ab_web_gd;

COMMENT ON TABLE ab_web_gd.gd_trevdoc
    IS 'Tabla enlazar revisores y documentos';
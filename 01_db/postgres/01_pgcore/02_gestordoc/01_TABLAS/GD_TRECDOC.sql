-- Table: ab_web_gd.gd_trecdoc

-- DROP TABLE ab_web_gd.gd_trecdoc;

CREATE TABLE ab_web_gd.gd_trecdoc
(
    rcd_rcd integer NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1 ),
    rcd_doc integer,
    rcd_rec integer,
    CONSTRAINT pk_rcd_rcd PRIMARY KEY (rcd_rcd),
    CONSTRAINT rcd_doc FOREIGN KEY (rcd_doc)
        REFERENCES ab_web_gd.gd_tdoc (doc_doc) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT rcd_rec FOREIGN KEY (rcd_rec)
        REFERENCES ab_web_gd.gd_treceiver (rec_rec) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)

TABLESPACE pg_default;

ALTER TABLE ab_web_gd.gd_trecdoc
    OWNER to ab_web_gd;

COMMENT ON TABLE ab_web_gd.gd_trecdoc
    IS 'Tabla enlazar receptores y documentos';
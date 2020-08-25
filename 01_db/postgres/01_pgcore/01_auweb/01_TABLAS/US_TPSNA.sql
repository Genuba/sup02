/* ---------------------------------------------------- */
/*  Generated by Enterprise Architect Version 13.5 		*/
/*  Created On : 14-Jun-2020 2:02:41 PM 				*/
/*  DBMS       : DB2 						*/
/* ---------------------------------------------------- */

/* Create Tables */

CREATE TABLE US_TPSNA
(
	PSNA_PSNA INTEGER NOT NULL GENERATED ALWAYS AS IDENTITY,
	PSNA_NDOC CHARACTER varying(30) NULL,
	PSNA_NOMB CHARACTER varying(30) NULL,
	PSNA_APDO CHARACTER varying(30) NULL,
	PSNA_DIRC CHARACTER varying(50) NULL,
	PSNA_TELF CHARACTER varying(30) NULL,
	PSNA_EMAIL CHARACTER varying(30) NULL,
	PSNA_USER INTEGER NULL
)
;

/* Create Primary Keys, Indexes, Uniques, Checks */

ALTER TABLE US_TPSNA ADD CONSTRAINT PK_US_TPSNA
	PRIMARY KEY (PSNA_PSNA)
;

CREATE INDEX IXFK_US_TPSNA_US_TUSER ON US_TPSNA (PSNA_USER ASC)
;

/* Create Foreign Key Constraints */

ALTER TABLE US_TPSNA ADD CONSTRAINT FK_US_TPSNA_US_TUSER
	FOREIGN KEY (PSNA_USER) REFERENCES US_TUSER (USER_USER) ON DELETE No Action ON UPDATE No Action
;

/* Create Table Comments */

COMMENT ON TABLE US_TPSNA
	IS 'Tabla personas'
;

COMMENT ON COLUMN US_TPSNA.PSNA_PSNA
	IS 'id persona'
;

COMMENT ON COLUMN US_TPSNA.PSNA_NDOC
	IS 'Numero de documento'
;

COMMENT ON COLUMN US_TPSNA.PSNA_NOMB
	IS 'nombre'
;

COMMENT ON COLUMN US_TPSNA.PSNA_APDO
	IS 'apellido'
;

COMMENT ON COLUMN US_TPSNA.PSNA_DIRC
	IS 'direccion'
;

COMMENT ON COLUMN US_TPSNA.PSNA_TELF
	IS 'Telefono'
;

COMMENT ON COLUMN US_TPSNA.PSNA_EMAIL
	IS 'correo/email'
;
/* ---------------------------------------------------- */
/*  Generated by Enterprise Architect Version 13.5 		*/
/*  Created On : 14-Jun-2020 2:02:41 PM 				*/
/*  DBMS       : DB2 						*/
/* ---------------------------------------------------- */

/* Create Tables */

CREATE TABLE MS_TSERV
(
	SERV_SERV INTEGER NOT NULL GENERATED ALWAYS AS IDENTITY,
	SERV_NAME CHARACTER varying(30) NULL,
	SERV_LINK CHARACTER varying(200) NULL,
	SERV_MODU INTEGER NULL
)
;

/* Create Primary Keys, Indexes, Uniques, Checks */

ALTER TABLE MS_TSERV ADD CONSTRAINT PK_MS_TSERV
	PRIMARY KEY (SERV_SERV)
;

CREATE INDEX IXFK_MS_TSERV_MS_TMODU ON MS_TSERV (SERV_MODU ASC)
;

/* Create Foreign Key Constraints */

ALTER TABLE MS_TSERV ADD CONSTRAINT FK_MS_TSERV_MS_TMODU
	FOREIGN KEY (SERV_MODU) REFERENCES MS_TMODU (MODU_MODU) ON DELETE No Action ON UPDATE No Action
;

/* Create Table Comments */

COMMENT ON TABLE MS_TSERV
	IS 'Servicios de la aplicacion'
;
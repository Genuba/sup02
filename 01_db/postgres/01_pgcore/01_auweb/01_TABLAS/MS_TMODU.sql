/* ---------------------------------------------------- */
/*  Generated by Enterprise Architect Version 13.5 		*/
/*  Created On : 14-Jun-2020 2:02:40 PM 				*/
/*  DBMS       : DB2 						*/
/* ---------------------------------------------------- */

/* Create Tables */

CREATE TABLE MS_TMODU
(
	MODU_MODU INTEGER NOT NULL GENERATED ALWAYS AS IDENTITY,
	MODU_NAME CHARACTER varying(30) NULL,
	MODU_ICON CHARACTER varying(200) NULL,
	MODU_DESC CHARACTER varying(200) NULL
)
;

/* Create Primary Keys, Indexes, Uniques, Checks */

ALTER TABLE MS_TMODU ADD CONSTRAINT PK_MS_TMODU
	PRIMARY KEY (MODU_MODU)
;

/* Create Table Comments */

COMMENT ON TABLE MS_TMODU
	IS 'Modulos de la aplicacion'
;
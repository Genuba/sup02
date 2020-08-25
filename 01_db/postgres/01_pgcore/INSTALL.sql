-- INSTRUCCIONES
-- REEMPLAZAR EL TEXTO _ab_core_ CON EL NOMBRE DEL PROYECTO

-- ********************  NOTA IMPORTANTE!!!!  ***********************
-- *                                                                *
-- *  POR FAVOR ENVIAR LOS LOGS DE EJECUCION DE ESTE SCRIPT (.LST)  *
-- *  PARA EFECTOS DE VERIFICACION DEL CAMBIO                       *
-- *                                                                *
-- *                                                                *
-- *                     ABSTRACT Inc                               *
-- *                                                                *
-- *                                                                *
-- ******************************************************************

-- SETUP
\i 00_utils/SETUP.sql

-- SCRIPTS
-- CORRIENDO SCRIPTS
-- ==================================================================
-- @INSTALL database: ab_core

CREATE DATABASE "ab_core"
    WITH
    OWNER = FS_AUWEB_US
    ENCODING = 'UTF8'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1;

\c ab_core FS_AUWEB_US

-- INSTALANDO SCHEMAS
-- ==================================================================
\i 01_auweb/INSTALL.sql
\i 02_gestordoc/INSTALL.sql

-- Si la ejecución del script no presenta ningún problema por favor haga
-- COMMIT, de lo contrario haga ROLLBACK y comuniquese con ABSTRACT Inc
--
-- ********************  NOTA IMPORTANTE!!!!  ***********************
-- *                                                                *
-- *  POR FAVOR ENVIAR EL LOG DE EJECUCION DE ESTE SCRIPT (*.LST)   *
-- *  PARA EFECTOS DE VERIFICACION DEL CAMBIO                       *
-- *  AL CORREO proyectos@ABSTRACT.CO                               *
-- *                                                                *
-- *                        ABSTRACT S.A.S                          *
-- *                                                                *
-- ******************************************************************

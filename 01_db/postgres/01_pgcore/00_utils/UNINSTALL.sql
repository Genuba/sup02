--DESINSTALADOR GENERAL

SELECT pg_terminate_backend(pg_stat_activity.pid)
FROM pg_stat_activity
WHERE pg_stat_activity.datname = 'ab_core' -- ← change this to your DB
  AND pid <> pg_backend_pid();

DROP DATABASE ab_core;
DROP SCHEMA ab_auth_us CASCADE;
DROP SCHEMA ab_web_gd CASCADE;
DROP USER ab_auth_us;
DROP USER ab_web_gd;

CREATE USER FS_AUWEB_US WITH
  ENCRYPTED PASSWORD 'FS_AUWEB_US'
  SUPERUSER;



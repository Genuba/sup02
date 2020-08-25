const { Pool } = require('pg');
//  DB Connect
const config = {
    host: 'pgcore-service',
    database: 'ab_core',
    user: 'ab_auth_us',
    password: 'ab_auth_us',
    port: 5432,
    max: 20,
    connectionTimeoutMillis: 0,
    idleTimeoutMillis: 0
}
const pool = new Pool(config);

module.exports = pool;

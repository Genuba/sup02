const { Pool } = require('pg');

const config = {
    host: 'pgcore-service',
    database: 'ab_core', 
    user: 'ab_web_gd', 
    password: 'ab_web_gd',
    port: 5432,
    max: 20,
    connectionTimeoutMillis: 0,
    idleTimeoutMillis: 0
} 
const pool = new Pool(config);

module.exports = pool;
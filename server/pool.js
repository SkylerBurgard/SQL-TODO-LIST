const pq = require('pg');
const Pool = pg.Pool;

const pool = new Pool({
    database: "TODO_LIST_WC"
    host: "localhost",
    port: 5432,
    max: 10,
    idleTimeoutMills: 30000
});


pool.on('connect', () => {
    console.log(`Pool connected!: ${err}`);

    pool.on('error', () => {
        console.warn(`Error with Database: ${err}`);

    });

    module.exports = pool;

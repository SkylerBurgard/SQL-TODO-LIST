const pq = require('pg');
const Pool = pg.Pool;

const pool = new Pool({
    database: "To-Do-List"
    host: "localhost",
    port: 5432,
    max: 10,
    idleTimeoutMills: 30000
});

pool.on('error', () => {
    console.warn(`Error with Database: ${err}`);

});

module.exports = pool;

const {Pool} = require('pg');



const pool = new Pool({
  host: 'localhost',
  user: 'lydia',
  password: 'SqlSdcPass!1',
  database: 'sdc',
  max: 25,
  idleTimeoutMillis: 1000
});



pool.on('error', (err, client) => {
  console.error('Unexpected error on idle client', err)
  process.exit(-1)
})




module.exports = pool;
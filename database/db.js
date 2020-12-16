const {Pool} = require('pg');

const pool = new Pool({
  host: 'ec2-54-183-162-130.us-west-1.compute.amazonaws.com',
  user: 'postgres',
  password: 'password',
  database: 'sdc',
  port: '5432',
  max: 25,
  idleTimeoutMillis: 5000
});



pool.on('error', (err, client) => {
  console.error('Unexpected error on idle client', err)
  process.exit(-1)
})




module.exports = pool;

const faker = require('faker');
const {random} = faker;
const fs = require('fs');



var JoinQueries = [];

var NatQueries = [];


const generateQueries = () => {
  for(let i = 0; i < 10000000; i+= 10000) {
    NatQueries.push(`EXPLAIN ANALYZE EXECUTE byNat(${random.number({ min: i, max: i+10000})});`);
    JoinQueries.push(`EXPLAIN ANALYZE EXECUTE byNatWMax(${random.number({ min: i, max: i+10000})});`);
  }
}

const generateLQueries = () => {
  for(let i = 0; i < 10000; i+= 1000) {
    NatQueries.push(`EXPLAIN ANALYZE EXECUTE byNat(${random.number({ min: i, max: i+1000})});`);
    JoinQueries.push(`EXPLAIN ANALYZE EXECUTE byNatWMax(${random.number({ min: i, max: i+1000})});`);
  }
}

for(let i = 5; i > 0; i--) {
  generateQueries();
  generateLQueries();
};





var nat = "\n" + NatQueries.join("\n");
fs.writeFileSync( 'bmqueries.sql', JoinQueries.join("\n"), { flag: 'a+' });
fs.writeFileSync( 'bmqueries.sql', nat, { flag: 'a+' });


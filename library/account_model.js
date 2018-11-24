const { Pool } = require('pg');

exports.checkAccountName = async function(accountName) {
  const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: true,
  });
  const response = await pool.query(`SELECT accontName FROM account WHERE accountName = ${accountName}`);
  console.log(response);
  if (response.rowCount === 1) {
    return true;
  } else {
    return false;
  }
}

exports.getAccountInfo = function () {
  return "";
}
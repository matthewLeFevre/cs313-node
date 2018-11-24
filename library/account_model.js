const { Pool } = require('pg');

exports.checkAccountName = async function(accountName) {
  try {
    const pool = new Pool({
      connectionString: process.env.DATABASE_URL,
      ssl: true,
    });
    const response = await pool.query(`SELECT accountName FROM account WHERE accountName = '${accountName}'`);
    if (response.rowCount === 1) {
      return true;
    } else {
      return false;
    }
  } catch (err) {
    console.log(err)
  }
 
}

exports.getAccountInfo = async function (accountName) {
  try {
    const pool = new Pool({
      connectionString: process.env.DATABASE_URL,
      ssl: true,
    });
    const response = await pool.query(`SELECT * FROM account WHERE accountName = '${accountName}'`);
    console.log(response);
    if (response.rowCount === 1) {
      return response.fields;
    } else {
      return false;
    }
  } catch (err) {
    console.log(err)
  }
}
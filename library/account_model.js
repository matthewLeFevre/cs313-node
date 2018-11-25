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
    if (response.rowCount === 1) {
      return response.rows[0];
    } else {
      return false;
    }
  } catch (err) {
    console.log(err)
  }
}

exports.createAccount = async function (accountName, accountPassword) {
  try {
    const pool = new Pool({
      connectionString: process.env.DATABASE_URL,
      ssl: true,
    });
    const response = await pool.query(`INSERT INTO account ( accountName, accountPassword ) VALUES ('${accountName}', '${accountPassword}');`);
    await pool.end();
    return response.rowCount;
  } catch (err) {
    console.log(err);
  }
}

exports.getAccount = async function (accondId) {
  const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: true,
  });
  const response = await pool.query(`SELECT * FROM account WHERE accountId = ${id};`);
  await pool.end();
  return JSON.stringify(response);
}
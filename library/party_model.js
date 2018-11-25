const { Pool } = require('pg');

exports.getPartiesByAccountId =  async (id) => {
  try {
    const pool = new Pool({
      connectionString: process.env.DATABASE_URL,
      ssl: true,
    });
    const query = await pool.query(`SELECT party.*, dispatch.*, account.* 
                                    FROM account AS a
                                    LEFT JOIN account_in_party AS ap
                                    ON a.accountId = ap.accountId 
                                    RIGHT JOIN party 
                                    ON ap.partyId = party.partyId
                                    RIGHT JOIN dispatch
                                    ON party.partyId = dispatch.partyId
                                    WHERE a.accountId = ${id}`);
    if (query.rowCount === 1) {
      return Response.rows;
    } else {
      return false;
    }
  } catch (err) {
    console.log(err);
  }
}

exports.getDispatchesByParty = async (id) => {
  try {
    const pool = new Pool({
      connectionString: process.env.DATABASE_URL,
      ssl: true,
    });
    const query = await pool.query(``);
    if (query.rowCount === 1) {
      return Response.rows;
    } else {
      return false;
    }
  } catch (err) {
    console.log(err);
  }
}

exports.getAccountsByParty = async (id) => {
  try {
    const pool = new Pool({
      connectionString: process.env.DATABASE_URL,
      ssl: true,
    });
    const query = await pool.query(``);
    if (query.rowCount === 1) {
      return Response.rows;
    } else {
      return false;
    }
  } catch (err) {
    console.log(err);
  }
}
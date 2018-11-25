const { Pool } = require('pg');

exports.getPartiesByAccountId =  async (id) => {
  try {
    const pool = new Pool({
      connectionString: process.env.DATABASE_URL,
      ssl: true,
    });
    const query = await pool.query(`SELECT p.* 
                                    FROM account AS a
                                    LEFT JOIN account_in_party AS ap
                                    ON a.accountId = ap.accountId 
                                    LEFT JOIN party AS p
                                    ON ap.partyId = p.partyId
                                    WHERE a.accountId = ${id}`);
    if (query.rowCount >= 1) {
      return query.rows;
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
    const query = await pool.query(`SELECT d.*, a.accountName, a.accountId 
                                    FROM party 
                                    LEFT JOIN dispatch AS d
                                    ON party.partyId = d.partyId
                                    LEFT JOIN account AS a
                                    ON d.accountId = a.accountId
                                    WHERE party.partyId = ${id}`);
    if (query.rowCount >= 1) {
      return query.rows;
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
    const query = await pool.query(`SELECT a.accountId, a.accountName 
                                    FROM party AS p
                                    INNER JOIN account_in_party AS ap
                                    ON p.partyId = ap.partyId
                                    INNER JOIN account AS a
                                    ON p.accountId = a.accountId
                                    WHERE p.partyId = ${id}`);
    if (query.rowCount >= 1) {
      return query.rows;
    } else {
      return false;
    }
  } catch (err) {
    console.log(err);
  }
}
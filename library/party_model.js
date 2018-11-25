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
                                    ON ap.accountId = a.accountId
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

exports.addAccountToParty = async (accountId, partyId) => {
  try {
    const pool = new Pool({
      connectionString: process.env.DATABASE_URL,
      ssl: true,
    });
    const query = await pool.query(`INSERT INTO account_in_party
                                    (accountId, partyId) VALUES (${accountId}, ${partyId})`);
    if (query.rowCount === 1) {
      return true;
    } else {
      return false;
    }
  } catch (err) {
    console.log(err);
  }
}

exports.createParty = async (partyInfo) => {
  try {
    const pool = new Pool({
      connectionString: process.env.DATABASE_URL,
      ssl: true,
    });
    const query = await pool.query(`INSERT INTO party
                                    (accountId, partyName) VALUES (${partyInfo.accountId}, '${partyInfo.partyName}')
                                    RETURNING party.partyId`);
  return query;
  } catch (err) {
    console.log(err);
  }
}

exports.deleteParty = async (partyId) => {
  try {} catch (err) {
    console.log(err);
  }
}
exports.deleteDispatch = async (partyInfo) => {
  try {} catch (err) {
    console.log(err);
  }
}
exports.createDispatch = async (partyInfo) => {
  try {} catch (err) {
    console.log(err);
  }
}
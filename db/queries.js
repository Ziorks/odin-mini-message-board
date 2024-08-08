const pool = require("./pool");

async function getAllMessages() {
  const { rows } = await pool.query("SELECT * FROM messages");
  return rows;
}

async function getMessageFromId(id) {
  const { rows } = await pool.query("SELECT * FROM messages WHERE id = $1", [
    id,
  ]);
  return rows[0];
}

async function insertMessage(text, user, added) {
  await pool.query(
    `INSERT INTO messages (text, "user", added) VALUES ($1, $2, $3)`,
    [text, user, added]
  );
}

module.exports = { getAllMessages, getMessageFromId, insertMessage };

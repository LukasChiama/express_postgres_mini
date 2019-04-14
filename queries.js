const Pool = require('pg').Pool;

const pool = new Pool({
  user: 'chukwualuka',
  host: 'localhost',
  database: 'api',
  password: 'lukas',
  port: 5432,
})

const getUsers = async (req, res) => {
  const results = await pool.query('SELECT * FROM users ORDER BY id ASC');
  res.status(200).json(results.rows);
};

const getUser = async (req, res) => {
  const id = req.params.user_id
  const result = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
  res.status(200).json(result.rows);
}

const addUser = async (req, res) => {
  const { name, email } = req.body;
  const result = await pool.query('INSERT INTO users(name, email) VALUES($1, $2) RETURNING *', [name, email]);
  res.status(201).json(result.rows);
}
 
const updateUser = async (req, res) => {
  const { name, email } = req.body;
  const id = Number(req.params.user_id)
  const result = await pool.query('UPDATE users SET name = $1, email = $2 WHERE id = $3', [name, email, id]);
  res.status(200).json(result.rows)
}

const deleteUser = async (req, res) => {
  const id = Number(req.params.user_id);
  const result = await pool.query('DELETE FROM users WHERE id = $1', [id]);
  res.status(200).json(`User with id ${id} has been deleted.`)
}

module.exports = {
  getUser,
  getUsers,
  addUser,
  updateUser,
  deleteUser
}
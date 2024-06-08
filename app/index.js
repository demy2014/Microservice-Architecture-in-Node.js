import express from 'express';
import pkg from 'pg';
const { Pool } = pkg;

const app = express();
const port = 3000;

const pool = new Pool({
    user: 'user',
    host: 'db',
    database: 'microservice',
    password: 'password',
    port: 5432,
});

app.get('/items', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM items');
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.listen(port, () => {
    console.log(`API service listening at http://localhost:${port}`);
});

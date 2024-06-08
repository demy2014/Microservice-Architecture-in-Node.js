const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();
const port = 3001;
const SECRET_KEY = 'your_secret_key';

app.use(express.json());

app.post('/verify', (req, res) => {
    const token = req.body.token;
    if (!token) {
        return res.status(401).json({ message: 'No token provided' });
    }
    try {
        jwt.verify(token, SECRET_KEY);
        res.json({ message: 'Token is valid' });
    } catch (err) {
        res.status(401).json({ message: 'Invalid token' });
    }
});

app.listen(port, () => {
    console.log(`Auth service listening at http://localhost:${port}`);
});

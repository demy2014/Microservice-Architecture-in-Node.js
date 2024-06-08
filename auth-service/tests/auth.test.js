const logger  = require('morgan');
const express = require('express');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.status(200).json({
        message: "Welcome to Express"
    });
})

app.listen(8000, () => console.log('Server running at 8001'));

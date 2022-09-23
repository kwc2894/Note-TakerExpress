const app = require('express').Router();
const path = require("path");


app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '../../Develop/public/index.html'))
);

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../../Develop/public/notes.html'));
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../Develop/public/index.html'));
});

module.exports = app;
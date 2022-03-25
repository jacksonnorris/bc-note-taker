const express = require('express');
const path = require('path');
const notes = require('./db')

const app = express();
const POST = process.env.PORT || 3001;

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({
    extended:true
}));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'));
});
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/notes.html'));
});
app.listen(POST, () => console.log(`Example app listening at http://localhost:${POST}`));
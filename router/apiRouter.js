const router = require('express').Router();
const path = require('path');
const notes = require('../db/db.json');
const fs = require('fs');

router.get('/notes', (req, res) => {
    fs.readFile('./db/db.json', 'utf-8', function(err, data) {
        res.json(JSON.parse(data));
    })
    // res.sendFile(path.join(__dirname, '../public/notes.html'));
});

router.post('/notes', (req, res) => {
    // fs.writeFile()
});

router.get('../db/db.json', (req, res) => {
    console.info(res.status(200).json(notes));
});

module.exports = router;
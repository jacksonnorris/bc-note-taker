const router = require('express').Router();
const path = require('path');
const notes = require('../db/db.json');

router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'));
});

router.get('../db/db.json', (req, res) => {
    res.status(200).json(notes);
});

module.exports = router;
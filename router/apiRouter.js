const router = require('express').Router();
const path = require('path');
const notes = require('../db/db.json');
const fs = require('fs');
const { text } = require('express');
const {v4 : uuidv4} = require('uuid');

router.get('/notes', (req, res) => {
    fs.readFile('./db/db.json', 'utf-8', function(err, data) {
        res.json(JSON.parse(data));
    })
});

router.post('/notes', (req, res) => {
   const note = { 
       title: req.body.title,
       text: req.body.text,
       id: uuidv4()
    }
    var info = fs.readFileSync('./db/db.json', 'utf-8');

    var currentData = JSON.parse(info);
    currentData.push(note);
    console.log(currentData);
    fs.writeFileSync('./db/db.json', JSON.stringify(currentData));
    res.json(currentData);
});

router.delete('/notes/:id', (req, res) => {
    var noteId = req.params.id;
    var info = fs.readFileSync('./db/db.json', 'utf-8');
    var currentData = JSON.parse(info);
    let newData = currentData.filter(note => note.id !== noteId);
    fs.writeFileSync('./db/db.json', JSON.stringify(newData));
    res.json(newData);
});


module.exports = router;
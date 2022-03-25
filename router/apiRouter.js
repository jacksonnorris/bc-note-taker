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
    // res.sendFile(path.join(__dirname, '../public/notes.html'));
});

router.post('/notes', (req, res) => {
//    console.log(req.body);
   const note = { 
       title: req.body.title,
       text: req.body.text,
       id: uuidv4()
    }
    var info = fs.readFileSync('./db/db.json', 'utf-8');
    // console.log(info);

    var currentData = JSON.parse(info);
    currentData.push(note);
    console.log(currentData);
    fs.writeFileSync('./db/db.json', JSON.stringify(currentData));
    res.json(currentData);
    // fs.writeFile()
});

router.delete('/notes/:id', (req, res) => {
    var noteId = req.params.id;
    console.log(noteId);
    var info = fs.readFileSync('./db/db.json', 'utf-8');
    var currentData = JSON.parse(info);
    for (var note in currentData) {
        if (currentData[note].id === noteId) {
            console.log('found')
        }
    }
})

router.get('./db/db.json', (req, res) => {
    console.info(res.status(200).json(notes));
});


module.exports = router;
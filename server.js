const express = require('express');
const path = require('path');

const app = express();
const PORT = 3001;

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({
    extended:true
}));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'));
})
app.listen(PORT, () => console.log(`Example app listening at http://localhost:${POST}`));
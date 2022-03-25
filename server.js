const express = require('express');
const path = require('path');
const notes = require('./db/db.json')
const router = require('./router/router.js')
const apiRouter = require('./router/apiRouter.js');

const app = express();
const POST = process.env.PORT || 3001;

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({
    extended:true
}));

app.use('/', router);
app.use('/api', apiRouter)
app.listen(POST, () => console.log(`Example app listening at http://localhost:${POST}`));
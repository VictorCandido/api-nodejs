const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const db = require('./models');
const router = require('./router');

const app = express();

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

db.sequelize.sync().then(() => {
    console.log('Drop and re-sync db.');
});

router(app);

app.listen(3333, () => {
    console.log('Listening on port 3333!');
});
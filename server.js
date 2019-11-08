const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;

const app = express();

app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json());



app.listen(PORT, () => console.log(`up on port ${PORT}`))
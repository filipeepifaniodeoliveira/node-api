'use strict'
const cors =  require('cors');
const authRoutes = require ('./auth/auth.routes')
const cadastroRoutes = require ('./cadastro/cadastro.routes')
const express = require('express');
const propierties = require('./config/propierties');
const DB = require('./config/db');
// init db
DB();

const app = express();
const router = express.Router();

const bodyParser = require('body-parser');
const bodyParserJSON = bodyParser.json();
const bodyParserURLEncoded = bodyParser.urlencoded({extended: true});

// app.use(bodyParser);
app.use(bodyParserJSON);
app.use(bodyParserURLEncoded);

app.use(cors());

app.use('/api', router);

authRoutes(router);
router.get('/', (req, res) => {
    res.send('Hello from home');
});

cadastroRoutes(router);
router.get('/', (req, res) => {
    res.send('Hello from home cad');
});

app.use(router);
app.listen(propierties.PORT, ()=> console.log(`Server runing on port ${propierties.PORT}`));
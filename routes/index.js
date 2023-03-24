const express = require('express');
const cyborgsRouter = require('./cyborgs.router');
const locationRouter = require('./location.router');


function routerApi(app){
    const router = express.Router();
    app.use('/api/v1', router);
    router.use('/cyborgs', cyborgsRouter)
}

module.exports = routerApi;
const express = require('express');
const router = express.Router();
const crudController = require('../server/controllers/crudController');


// load all available datas
router.get('/all', crudController.loadEverything);



// Create
router.post('/create', crudController.create);

module.exports = router;
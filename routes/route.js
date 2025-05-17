const express = require('express');
const router = express.Router();
const { postVtcController } = require('../controllers/controller');

router.post('/', postVtcController);

module.exports = router;
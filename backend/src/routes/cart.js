// Rotas do produto
const express = require("express");
const router = express.Router();
const controller = require('../controllers/cartController');

router.get('/',controller.get);
router.post('/',controller.post);
router.put('/:id',controller.put);
router.delete('/:id',controller.delete);
router.get('/:id',controller.getById);

module.exports = router
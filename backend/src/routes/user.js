// Rotas do usuário
const express = require("express")
const router = express.Router()
const controller = require('../controllers/userController');

router.post('/auth/signup',controller.signUp);
router.post('/auth/signin',controller.signIn);
router.get('/:id',controller.getById);
router.get('/',controller.get);
router.put('/:id',controller.put);
router.delete('/:id',controller.delete);

module.exports = router
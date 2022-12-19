const express = require('express');

const FilmesController = require('../controllers/FilmesController');

const router = express.Router();

router.get('/', FilmesController.index);

router.get('/filme', FilmesController.filme)


// router.get('/filmes/:id', FilmesController.buscarPorId);


module.exports = router;
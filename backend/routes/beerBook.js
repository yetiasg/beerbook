const express = require('express');
const router = express.Router();
const {verifyAccessToken} = require('../helpers/jwt_helper');

const beersController = require('../controllers/beerBook');

router.get('/', beersController.getMainPage);

router.get('/beers', verifyAccessToken, beersController.getBeers);

router.get('/beer', verifyAccessToken, beersController.getBeer);

router.put('/beer', verifyAccessToken, beersController.addBeer);

router.patch('/beer', verifyAccessToken, beersController.updateBeer);

router.delete('/beer', verifyAccessToken, beersController.deleteBeer);


module.exports = router;
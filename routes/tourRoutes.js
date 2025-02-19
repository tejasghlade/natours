const express = require('express');
const { getAllTours, createTour, updateTour, deleteTour, getTour, checkId, checkBody } = require('../controller/tourController');




const router = express.Router();

router.param('id', checkId)

// Tour routes
router.route('/')
    .get(getAllTours)
    .post(checkBody , createTour);

router.route('/:id')
    .get(getTour)
    .patch(updateTour)
    .delete(deleteTour);


module.exports = router
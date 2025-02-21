const express = require('express');
const {
  getAllTours,
  createTour,
  updateTour,
  deleteTour,
  getTour,
  aliasTopTours,
} = require('../controller/tourController');

const router = express.Router();

// router.param('id', checkId); // middlewares

// aliasing route
router.route('/top-5-cheap').get(aliasTopTours, getAllTours);

// Tour routes
router.route('/').get(getAllTours).post(createTour);

router.route('/:id').get(getTour).patch(updateTour).delete(deleteTour);

module.exports = router;

const express = require('express');
const {
  getAllTours,
  createTour,
  updateTour,
  deleteTour,
  getTour,
  aliasTopTours,
  getTourStats,
} = require('../controller/tourController');

const router = express.Router();

// router.param('id', checkId); // middlewares

// aliasing route
router.route('/top-5-cheap').get(aliasTopTours, getAllTours);

router.route('/tour-stats').get(getTourStats);

// Tour routes
router.route('/').get(getAllTours).post(createTour);

router.route('/:id').get(getTour).patch(updateTour).delete(deleteTour);

module.exports = router;

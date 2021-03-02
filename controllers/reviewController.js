const Review = require('../models/reviewModel');
const catchAsync = require('../utils/catchAsync');
const factory = require('./handlerFactory');

exports.createReview = catchAsync(async (req, res, next) => {
  const newReview = await Review.create({
    review: req.body.review,
    rating: req.body.rating,
    user: req.user.id,
    tour: req.params.tourId,
  });

  res.status(201).json({
    status: 'success',
    data: {
      review: newReview,
    },
  });
});

exports.getReview = factory.getOne(Review);
exports.getAllReviews = factory.getAll(Review);
exports.updateReview = factory.updateOne(Review);
exports.deleteReview = factory.deleteOne(Review);

const express = require('express');
const router = express.Router();
const ParksModel = require('../models/Parks');
const ReviewsModel = require('../models/Reviews');

router.get('/:park_id', async(req, res, next) => {
    const parkId = req.params.park_id;
    Park = new ParksModel(parkId);
    parkData = await Park.getParkData();
    const Reviews = new ReviewsModel(null, parkId);
    reviewData = await Reviews.getParkReviews();

    res.render('template', {
        locals: {
            title: parkData.name,
            parkData,
            reviewData,
            is_logged_in: req.session.is_logged_in,
        },
        partials: {
            body: 'partials/single-park',
        },
    });
});

module.exports = router;
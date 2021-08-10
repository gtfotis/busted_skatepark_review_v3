const express = require('express');
const router = express.Router();
const ReviewsModel = require('../models/Reviews');

router.post('/add', async(req, res) => {
    const { park_id, review_content, score } = req.body;
    const Review = new ReviewsModel(null, park_id, review_content, score);
    const response = await Review.addReview();
    if (response.rowCount >= 1) {
        res.redirect('back');
    } else {
        res.sendStatus(500);
    }
});

router.post('/delete', async(req, res) => {
    const { id } = req.body;
    const response = await Review.destroy({
        where: { id },
    });
    console.log('DELETE ROUTE RESPONSE IS: ', response);
    res.redirect('/');
});

module.exports = router;
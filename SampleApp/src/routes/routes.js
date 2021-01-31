const express = require('express');
const router = express.Router();

//Define routes for the application.
router.route('/').get( (req,res,next) => {
    res.status(200).json({
        message: 'Get all items from the database'
    })
}).post((req,res,next) => {
    res.status(201).json({
        message: 'Create items from the 3rd party url'
    });
});

module.exports = router;
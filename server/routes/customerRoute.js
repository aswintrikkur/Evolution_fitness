const express = require('express');
const { Customer } = require('../models/customerModel');
const router = express.Router();

router.post('/', async (req, res) => {
    try {

        const { name, email, service, message } = req.body;
        console.log(req.body);
        const dbResponse = await Customer.create({ name, email, service, message })
        res.json({
            message: 'successful'
        })

    } catch (error) {
        res.status(400).json({
            message: error.message
        })
    }

});

module.exports = { customerRoute : router };
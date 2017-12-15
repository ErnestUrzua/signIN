const express = require('express'),
      flash = require('req-flash'),
      User = require('../models/user')

module.exports = (() => {
'use strict'
const router = express.Router()

/* Register user */
router.post('/user', (req, res) => {
    const User = new User({
        name: req.body.name,
        email: req.body.email,
        telephone: req.body.telephone,
        company: req.body.company,
        officialVisit: req.body.officialVisit,
        escort: req.body.escort,
        escortName: req.body.escortName
    })
    User.create(User, (err) => {
        if (err) {
            res.statusMessage = 'unsuccesful creation'
            console.log(err)
            return res.status(409).send()  
        }
        res.status(200).send()   
    })
})
return router
})()


var express = require('express');
var router = express.Router();
var Acc = require('../models/AccSchema');

router.post('/create', (req, res, next) => {
    var newAcc = new Acc({
        Name: req.body.Name,
        Address: req.body.Address,
        Contact: req.body.Contact,
        Password: req.body.Password
    });
    newAcc.save((err, Account) => {
        if (err)
            res.status(500).json({ errmsg: err });
        res.status(200).json({ msg: Account });

    });
});
router.get('/read', (req, res, next) => {
    Acc.find({}, (err, allData) => {
        if (err)
            res.status(500).json({ errmsg: err });
        res.status(200).json({ msg: allData });
    });
});

module.exports = router;
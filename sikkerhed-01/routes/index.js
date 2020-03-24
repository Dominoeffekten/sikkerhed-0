const express = require('express');
const router = express.Router();
const users = require("../models/user");

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', {
        title: 'Fragments of the World',
        subtitle: 'Playing with the World'
    });
});
router.get('/users', function(req, res, next) {
    var user = users.save
    res.render('users', {
        title: 'Fragments of the World',
        subtitle: 'Playing with the World',
        users: user
    });
});
router.post('/users', function(req, res, next) {
    console.log(req.body)
    res.render('users', {
        title: 'Fragments of the World',
        subtitle: 'Playing with the World'
    });
});
/*
router.get('/worldview', async function(req, res, next) {
    res.render('worldview', {
        title: 'Fragments of the World',
        subtitle: 'Start by Choosing a Continent'
    });
});

router.get('/continents', async function(req, res, next) {
    let continents = await modContinent.getContinents({}, {sort: {name: 1}});
    res.json(continents);
});

router.get('/countries/:cont', async function(req, res, next) {
    let countries = await modCountry.getCountries({continent: req.params.cont}, {sort: {name: 1}});
    res.json(countries);
});
*/
module.exports = router;

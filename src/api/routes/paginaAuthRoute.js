const express = require("express");
const { Router } = require("express");
const path = require("path");
const passport = require("passport");

const router = Router();

router.use(express.static(path.join(__dirname, '..', 'public')));

router.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public','templates','index.html'));
});

router.post('/login', 
  passport.authenticate('local', { failureRedirect: '/login' }),
  function(req, res) {
    res.redirect('/');
  });

module.exports = router;
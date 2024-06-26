//liga o checkin/out ao seu respectivo html e css

const express = require("express");
const { Router } = require("express");
const path = require("path");

const router = Router();

router.use(express.static(path.join(__dirname, '..', 'public')));

router.get('/checkin', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public','templates', 'checkin.html'));
  });

module.exports = router;
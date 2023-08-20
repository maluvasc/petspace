const express = require("express");
const { Router } = require("express");
const path = require("path");

const router = Router();

router.use(express.static(path.join(__dirname, '..', 'public')));

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public','templates', 'home.html'));
  });

module.exports = router;
const express = require("express");
const { Router } = require("express");
const path = require("path");

const router = Router();

router.use(express.static(path.join(__dirname, '..', 'public')));

router.get('/404', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public','templates','em-construcao.html'));
  });

module.exports = router;
//liga a página de em construção ao seu respectivo html e css

const express = require("express");
const { Router } = require("express");
const path = require("path");

const router = Router();

router.use(express.static(path.join(__dirname, '..', 'public')));

router.get('/construcao', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public','templates','construcao.html'));
  });

module.exports = router;
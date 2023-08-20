const express = require("express");
const { Router } = require("express");
const path = require("path");

const router = Router();

router.use(express.static(path.join(__dirname, '..', 'public')));

router.get('/perfil-do-pet', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'perfil.html'));
  });

router.get('/perfil-tutor', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'perfil-tutor.html'));
  });

module.exports = router;
const express = require("express");
const { Router } = require("express");
const path = require("path");

const router = Router();

router.use(express.static(path.join(__dirname, '..', 'public')));

router.get('/cadastro', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public','templates','cadastro-pet.html'));
  });

router.get('/dog-cadastro', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public','templates','cadastro-pet.html'));
  });

router.get('/tutor-cadastro', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public','templates','cadastro-tutor.html'));
  });

module.exports = router;
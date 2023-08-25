//liga as páginas de cadastro aos seus respectivos html e css

const express = require("express");
const { Router } = require("express");
const path = require("path");

const router = Router();

router.use(express.static(path.join(__dirname, '..', 'public')));

router.get('/cadastro', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public','templates','page3.html'));
  });

router.get('/cadastro/2', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public','templates','cadastro-pet.html'));
  });

router.get('/cadastro/3', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public','templates','page2.html'));
  });

module.exports = router;
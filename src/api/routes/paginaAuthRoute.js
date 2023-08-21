const express = require("express");
const { Router } = require("express");
const path = require("path");
const AuthController = require("../controllers/authController");

const router = Router();

router.use(express.static(path.join(__dirname, '..', 'public')));

router.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public','templates','index.html'));
});

router.post('/auth/login', AuthController.login);

module.exports = router;
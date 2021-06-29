const express = require("express");
const { LoginAdmin } = require("../models/Model");
const loginAdmin = express.Router();

//membuat data login

loginAdmin.post("/login-admin", (req, res) => {
  const body = req.body;
  LoginAdmin.create(body)
    .then((result) => res.status(200).json(result))
    .catch((err) => res.status(500).json(err));
});

loginAdmin.get("/data-login-admin/:username", (req, res) => {
  const username = req.params.username;
  LoginAdmin.findAll({
    where: { username: username },
    attributes: ["username", "password"],
  })
    .then((result) => res.status(200).json(result))
    .catch((err) => res.status(404).json(err));
});

loginAdmin.get("/data-login-admin", (req, res) => {
  LoginAdmin.findAll()
    .then((result) => res.status(200).json(result))
    .catch((err) => res.status(404).json(err));
});

module.exports = loginAdmin;

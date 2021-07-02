const express = require("express");
const { Login } = require("../models/Model");
const login = express.Router();

//membuat data login

login.post("/login", (req, res) => {
  const body = req.body;
  Login.create(body)
    .then((result) => res.status(200).json(result))
    .catch((err) => res.status(500).json(err));
});

login.get("/data-login/:username", (req, res) => {
  const username = req.params.username;
  Login.findOne({
    where: { username: username },
    attributes: ["username", "password"],
  })
    .then((result) => res.status(200).json(result))
    .catch((err) => res.status(404).json(err));
});

login.get("/data-login", (req, res) => {
  Login.findAll()
    .then((result) => res.status(200).json(result))
    .catch((err) => res.status(404).json(err));
});

login.delete("/data-login-delete/:id", (req, res) => {
  const id = req.params.id;
  Login.destroy({
    where: { id: id },
  })
    .then((result) => res.status(200).json(result))
    .catch((err) => res.status(500).json(err));
});

module.exports = login;

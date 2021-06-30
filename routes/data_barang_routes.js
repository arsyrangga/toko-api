const express = require("express");
const { DataBarang } = require("../models/Model");

const dataBarang = express.Router();

// manampilkan semua data barang
dataBarang.get("/data-barang", (req, res) => {
  DataBarang.findAll()
    .then((result) => res.status(200).json(result))
    .catch((err) => res.status(500).json(err));
});

dataBarang.post("/data-barang-post", (req, res) => {
  const body = req.body;
  DataBarang.create(body)
    .then((result) => res.status(200).json(result))
    .catch((err) => res.status(500).json(err));
});

module.exports = dataBarang;

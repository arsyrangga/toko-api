const express = require("express");
const { DataBarang } = require("../models/Model");

const dataBarang = express.Router();

// manampilkan semua data barang
dataBarang.get("/data-barang", (req, res) => {
  DataBarang.findAll()
    .then((result) => res.status(200).json(result))
    .catch((err) => res.status(500).json(err));
});

// POST BARANG
dataBarang.post("/data-barang-post", (req, res) => {
  const body = req.body;
  DataBarang.create(body)
    .then((result) => res.status(200).json(result))
    .catch((err) => res.status(500).json(err));
});

// Hapus Barang
dataBarang.delete("/data-barang-delete/:id", (req, res) => {
  const id = req.params.id;
  DataBarang.destroy({
    where: { id: id },
  })
    .then((result) => res.status(200).json(result))
    .catch((err) => res.status(404).json(err));
});

module.exports = dataBarang;

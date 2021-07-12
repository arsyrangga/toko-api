const express = require("express");
const {
  DataBarang,
  DataKeluar,
  DataMasuk,
  DataReturn,
} = require("../models/Model");

const dataBarang = express.Router();

// manampilkan semua data barang
dataBarang.get("/data-barang", (req, res) => {
  DataBarang.findAll({
    include: [
      {
        model: DataMasuk,
        attributes: ["stock", "barang_id"],
      },
      {
        model: DataKeluar,
        attributes: ["stock", "barang_id"],
      },
      {
        model: DataReturn,
        attributes: ["stock", "barang_id"],
      },
    ],
  })
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

dataBarang.put("/data-barang-edit/:id", (req, res) => {
  const id = req.params.id;
  DataBarang.update(
    {
      id: req.body.id,
      barang_id: req.body.barang_id,
      nama: req.body.nama,
      kategori: req.body.kategori,
      merk: req.body.merk,
      harga: req.body.harga,
      stock: req.body.stock,
    },
    { where: { id: id } }
  )
    .then((result) => res.status(200).json(result))
    .catch((err) => res.status(404).json(err));
});

module.exports = dataBarang;

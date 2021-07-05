const express = require("express");
const { DataKeluar } = require("../models/Model");
const dataKeluar = express.Router();

dataKeluar.get("/data-keluar", (req, res) => {
  DataKeluar.findAll()
    .then((result) => res.status(200).json(result))
    .catch((err) => res.status(404).json(err));
});

dataKeluar.post("/data-keluar-post", (req, res) => {
  const body = req.body;
  DataKeluar.create(body)
    .then((result) => res.status(200).json(result))
    .catch((err) => res.status(500).json(err));
});

dataKeluar.delete("/data-keluar-delete/:id", (req, res) => {
  const id = req.params.id;
  DataKeluar.destroy({
    where: { id: id },
  })
    .then((result) => res.status(200).json(result))
    .catch((err) => res.status(404).json(err));
});

dataKeluar.put("/data-keluar-edit/:id", (req, res) => {
  const id = req.params.id;
  DataKeluar.update(
    {
      code: req.body.code,
      tanggal: req.body.tanggal,
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

module.exports = dataKeluar;

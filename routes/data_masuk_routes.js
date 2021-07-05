const express = require("express");
const { DataMasuk } = require("../models/Model");
const dataMasuk = express.Router();

dataMasuk.get("/data-masuk", (req, res) => {
  DataMasuk.findAll()
    .then((result) => res.status(200).json(result))
    .catch((err) => res.status(404).json(err));
});

dataMasuk.post("/data-masuk-post", (req, res) => {
  const body = req.body;
  DataMasuk.create(body)
    .then((result) => res.status(200).json(result))
    .catch((err) => res.status(500).json(err));
});

dataMasuk.delete("/data-masuk-delete/:id", (req, res) => {
  const id = req.params.id;
  DataMasuk.destroy({
    where: { id: id },
  })
    .then((result) => res.status(200).json(result))
    .catch((err) => res.status(404).json(err));
});

dataMasuk.put("/data-masuk-edit/:id", (req, res) => {
  const id = req.params.id;
  DataMasuk.update(
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

module.exports = dataMasuk;

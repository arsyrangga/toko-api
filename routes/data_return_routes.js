const express = require("express");
const { DataReturn } = require("../models/Model");

const dataReturn = express.Router();

dataReturn.get("/data-return", (req, res) => {
  DataReturn.findAll()
    .then((result) => res.status(200).json(result))
    .catch((err) => res.status(404).json(err));
});

dataReturn.post("/data-return-post", (req, res) => {
  const body = req.body;
  DataReturn.create(body)
    .then((result) => res.status(200).json(result))
    .catch((err) => res.status(500).json(err));
});

dataReturn.delete("/data-return-delete/:id", (req, res) => {
  const id = req.params.id;
  DataReturn.destroy({
    where: { id: id },
  })
    .then((result) => res.status(200).json(result))
    .catch((err) => res.status(404).json(err));
});

dataReturn.put("/data-return-edit/:id", (req, res) => {
  const id = req.params.id;
  DataReturn.update(
    {
      code: req.body.code,
      tanggal: req.body.tanggal,
      nama: req.body.nama,
      kategori: req.body.kategori,
      merk: req.body.kategori,
      harga: req.body.harga,
      stock: req.body.stock,
    },
    { where: { id: id } }
  )
    .then((result) => res.status(200).json(result))
    .catch((err) => res.status(404).json(err));
});

module.exports = dataReturn;

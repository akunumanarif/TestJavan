const express = require("express");
const KeluargaModel = require("../models/keluargaModel");
const router = express.Router();

//? Get Semua Anggota Keluarga

router.get("/", async (req, res) => {
  try {
    console.log("Tes");
  } catch (error) {
    res.status(404).json(error);
  }
});

//? Menambahkan data

router.post("/add", async (req, res) => {
  const newData = new KeluargaModel(req.body);

  try {
    const addData = await newData.save();
    res.status(201).json(addData);
  } catch (error) {
    res.status(500).json(error);
    console.log(error);
  }
});

//? Edit data

router.put("/edit/:id", async (req, res) => {
  try {
    const updateData = await KeluargaModel.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updateData);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;

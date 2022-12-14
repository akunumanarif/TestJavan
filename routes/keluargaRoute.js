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

router.post("/add", async (req, res) => {
  const newData = new KeluargaModel(req.body);

  try {
    const addData = await newData.save();
    res.status(201).setHeader("Access-Control-Allow-Origin", "*").json(addData);
  } catch (error) {
    res.status(500).json(error);
    console.log(error);
  }
});

module.exports = router;

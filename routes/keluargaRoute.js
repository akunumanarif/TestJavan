const express = require("express");
const KeluargaModel = require("../models/keluargaModel");
const router = express.Router();

//? Get Semua Anggota Keluarga

router.get("/all", async (req, res) => {
  try {
    let data = await KeluargaModel.find();
    res.status(200).json(data);
  } catch (error) {
    res.status(404).json(error);
  }
});

//? Get Nilai aset seluruh keluarga

router.get("/assets", async (req, res) => {
  try {
    const allAssets = await KeluargaModel.aggregate([
      { $unwind: "$aset" },
      {
        $match: {
          "aset.asetPrice": { $gte: 0 },
        },
      },
      {
        $group: {
          _id: "$nama",
          total: { $sum: "$aset.asetPrice" },
        },
      },
    ]);
    res.status(200).json(allAssets);
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

//? Hapus Data

router.delete("/delete/:id", async (req, res) => {
  try {
    await KeluargaModel.findByIdAndDelete(req.params.id);
    res.status(200).json("Data berhasil dihapus");
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;

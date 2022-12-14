const express = require("express");
const { route } = require("express/lib/router");
const router = express.Router();

//? Get Semua Anggota Keluarga

router.get("/", async (req, res) => {
  try {
    console.log("Tes");
  } catch (error) {
    res.status(404).json(error);
  }
});

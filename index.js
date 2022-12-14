const express = require("express");
const app = express();
const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://numanarif:akunumanarif@cluster0.ecx0a.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => console.log("MongoDB connection Succesful"))
  .catch((err) => console.log(err));

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

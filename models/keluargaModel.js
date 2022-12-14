const mongoose,
  { Schema } = require("mongoose");

const KeluargaSchema = new mongoose.Schema(
  {
    nama: { type: String, required: true },
    aset: [
      {
        asetName: {
          type: String,
          default: "Tidak punya aset",
        },
        asetPrice: {
          type: Number,
          default: 0,
        },
      },
    ],
  },
  { timestamps: true }
);

export const KeluargaModel = mongoose.model("keluarga", KeluargaSchema);

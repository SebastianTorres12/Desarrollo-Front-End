import mongoose from "mongoose";

const investigadorSchema = new mongoose.Schema(
  {
    nombre: {
      type: String,
      required: [true, "Complete este campo"]
    },
    responsable: {
      type: Boolean,
      required: [true, "Complete este campo"]
    }
  },
  {
    timestamps: true,
    versionKey: false,
    collection: "investigadores"
  }
);

export const InvestigadorModel = mongoose.model("Investigador", investigadorSchema);

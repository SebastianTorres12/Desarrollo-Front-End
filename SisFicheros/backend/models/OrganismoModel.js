import mongoose from "mongoose";

const organismoSchema = new mongoose.Schema(
  {
    nombre: String,
    direccion: String,
    poblacion: Number,
    codigo_postal: Number,
    telefono: Number,
    convocatorias: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Convocatoria" // Referencia a la colección Convocatoria
      }
    ]
  },
  {
    timestamps: true,
    versionKey: false,
    collection: "organismos"
  }
);

export const OrganismoModel = mongoose.model("Organismo", organismoSchema);

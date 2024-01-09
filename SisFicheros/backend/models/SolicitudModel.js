import mongoose from "mongoose";

const solicitudSchema = new mongoose.Schema(
  {
    
    titulo_proyecto: {
      type: String,
      required: [true, "Complete este campo"]
    },
    fecha_presentacion: {
      type: Date,
      required: [true, "Complete este campo"]
    },
    fecha_resolucion: {
      type: Date,
      required: [true, "Complete este campo"]
    },
    importe_economico: {
      type: Number,
      required: [true, "Complete este campo"]
    },
    fecha_inicioProyecto: {
      type: Date,
      required: [true, "Complete este campo"]
    },
    fecha_finProyecto: {
      type: Date,
      required: [true, "Complete este campo"]
    },
    estado: {
      type: Boolean,
      required: [true, "Complete este campo"]
    },
    participantes: [
      {
        investigador_id: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Investigador" // Referencia a la colección Investigador
        },
        horas_semana: Number
      }
    ]
  },
  {
    timestamps: true,
    versionKey: false,
    collection: "solicitudes"
  }
);

export const SolicitudModel = mongoose.model("Solicitud", solicitudSchema);

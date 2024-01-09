
import { InvestigadorModel } from "../models/InvestigadorModel.js";

export const getInvestigadores = async (req, res) => {
  try {
    const investigadores = await InvestigadorModel.find();
    res.status(200).json(investigadores);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getInvestigador = async (req, res) => {
  try {
    const { id } = req.params;
    const investigador = await InvestigadorModel.findById(id);
    if (!investigador) {
      return res.status(404).json(`Investigador con ID: ${id} no encontrado`);
    }
    res.status(200).json(investigador);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createInvestigador = async (req, res) => {
  try {
    const investigador = await InvestigadorModel.create(req.body);
    res.status(201).json(investigador);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateInvestigador = async (req, res) => {
  try {
    const { id } = req.params;
    const investigador = await InvestigadorModel.findByIdAndUpdate(
      { _id: id },
      req.body,
      { new: true }
    );
    res.status(200).json(investigador);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteInvestigador = async (req, res) => {
  try {
    const { id } = req.params;
    const investigador = await InvestigadorModel.findByIdAndDelete(id);
    if (!investigador) {
      return res.status(404).json(`Investigador con ID: ${id} no encontrado`);
    }
    res.status(200).json("Investigador eliminado exitosamente");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

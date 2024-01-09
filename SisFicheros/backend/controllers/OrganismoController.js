
import { OrganismoModel } from "../models/OrganismoModel.js";

export const getOrganismos = async (req, res) => {
  try {
    const organismos = await OrganismoModel.find();
    res.status(200).json(organismos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getOrganismo = async (req, res) => {
  try {
    const { id } = req.params;
    const organismo = await OrganismoModel.findById(id);
    if (!organismo) {
      return res.status(404).json(`Organismo con ID: ${id} no encontrado`);
    }
    res.status(200).json(organismo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createOrganismo = async (req, res) => {
  try {
    const organismo = await OrganismoModel.create(req.body);
    res.status(201).json(organismo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateOrganismo = async (req, res) => {
  try {
    const { id } = req.params;
    const organismo = await OrganismoModel.findByIdAndUpdate(
      { _id: id },
      req.body,
      { new: true }
    );
    res.status(200).json(organismo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteOrganismo = async (req, res) => {
  try {
    const { id } = req.params;
    const organismo = await OrganismoModel.findByIdAndDelete(id);
    if (!organismo) {
      return res.status(404).json(`Organismo con ID: ${id} no encontrado`);
    }
    res.status(200).json("Organismo eliminado exitosamente");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

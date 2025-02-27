import { Panelist } from "../model/Panelists.js";
import "dotenv/config";
import { commanService } from "../services/commanService.js";

export const getPanelist = async (req, res) => {
  try {
    const result = await commanService.getAll(Panelist);
    res.status(200).json({
      message: result.message,
      data: result.data,
    });
  } catch (error) {
    res.status(500).json({
      message:
        error.message || "An error occurred while processing the request.",
    });
  }
};
export const getPanelistById = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await commanService.getItemById(Panelist, id);
    res.status(200).json({
      message: result.message,
      data: result.data,
    });
  } catch (error) {
    res.status(500).json({
      message:
        error.message || "An error occurred while processing the request.",
    });
  }
};

export const addPanelist = async (req, res) => {
  try {
    const photo = req.file.filename;
    const payload = {
      ...req.body,
      photo,
    };
    const total = await Panelist.countDocuments();
    if (total === 3)
      res.status(400).json({ message: "Cannot Add more than 3 panelist" });

    const result = await commanService.create(Panelist, payload);
    res.status(201).json({ message: result.message, data: result.data });
  } catch (error) {
    console.error("Error in add panelist:", error);
    // Send appropriate error response
    const status = error.name === "ValidationError" ? 400 : 500;

    res
      .status(status)
      .json({ message: error.message || "Internal server error" });
  }
};

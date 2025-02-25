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

export const createPanelist = async (req, res) => {
  try {
    const payload = req.body;
    console.log("payload", payload);

    // Validate required fields
    if (!payload.fullName || !payload.phone || !payload.email) {
      return res
        .status(400)
        .json({ message: "Full Name, Phone, and Email are required." });
    }

    // Check if the panelist already exists
    const existingPanelist = await Panelist.findOne({ email: payload.email });
    if (existingPanelist) {
      return res
        .status(409)
        .json({ message: "Panelist with this email already exists." });
    }

    // Create new panelist
    const result = await commanService.create(Panelist, payload);

    // Send success response
    return res.status(201).json({
      message: "Panelist created successfully.",
      panelist: result,
    });
  } catch (error) {
    console.error("Error creating panelist:", error);
    return res.status(500).json({
      message: "An error occurred while creating the panelist.",
      error: error.message,
    });
  }
};

import Poll from "../model/Poll.js";
import "dotenv/config"; // Load environment variables from .env file
import { commanService } from "../services/commanService.js";

export const getPollItems = async (req, res) => {
  try {
    const items = await commanService.getItems(Poll);

    res.status(200).json({
      success: true,
      data: items,
    });
  } catch (err) {
    console.error("Error fetching items:", err);
    // Return an error response in case of failure
    res.status(500).json({
      success: false,
      message: "An error occurred while fetching items.",
      error: err.message,
    });
  }
};

export const getPollById = async (req, res) => {
  try {
    const { id } = req.params;
    const poll = await Poll.findById(id);
    if (!poll) {
      return res.status(404).json({
        success: false,
        message: "Poll not found",
      });
    }
    res.status(200).json({
      success: true,
      message: "Poll fetched successfully",
      data: poll,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch poll",
      error: error.message,
    });
  }
};

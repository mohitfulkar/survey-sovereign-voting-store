import Poll from "../model/Poll.js";
import "dotenv/config"; // Load environment variables from .env file

export const getPollItems = async (req, res) => {
  try {
    const polls = await Poll.find();

    res.status(200).json(polls);
  } catch (error) {
    res.status(500).json({ error: "Error fetching polls from the database" });
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

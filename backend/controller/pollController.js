import Poll from "../model/Poll.js";
import "dotenv/config"; // Load environment variables from .env file
import { commanService } from "../services/commanService.js";

export const getPollItems = async (req, res) => {
  try {
    const items = await commanService.getAll(Poll, req.query);

    res.status(200).json({
      success: true,
      ...items,
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

export const deletePollById = async (req, res) => {
  try {
    let { id } = req.params; //

    const response = await commanService.deleteById(Poll, id);
    res.status(201).json(response); // Send the response back to the client
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to create poll",
      error: error.message,
    });
  }
};
export const deletePolls = async (req, res) => {
  try {

    const response = await commanService.deleteById(Poll);
    res.status(201).json(response); // Send the response back to the client
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to create poll",
      error: error.message,
    });
  }
};
export const createPoll = async (req, res) => {
  try {
    let payload = req.body; //
    const response = await commanService.create(Poll, payload);
    res.status(201).json(response); // Send the response back to the client
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to create poll",
      error: error.message,
    });
  }
};
export const updateStatus = async (req, res) => {
  try {
    const { status } = req.body; // Extract `id` and `status` from request body
    const { id } = req.params; // Extract `id` and `status` from request body

    // Check if `id` and `status` are provided
    if (!id || !status) {
      return res.status(400).json({
        success: false,
        message: "Poll ID and status are required",
      });
    }

    // Validate that `status` is one of the allowed values
    const allowedStatuses = ["pending", "accepted", "rejected"];
    if (!allowedStatuses.includes(status)) {
      return res.status(400).json({
        success: false,
        message: `Invalid status. Allowed values: ${allowedStatuses.join(
          ", "
        )}`,
      });
    }

    // Check if poll exists
    const existingPoll = await Poll.findById(id);
    if (!existingPoll) {
      return res.status(404).json({
        success: false,
        message: "Poll not found",
      });
    }

    // Update poll using the common service
    const updatedPoll = await commanService.update(Poll, id, { status });

    return res.status(200).json({
      success: true,
      message: "Poll status updated successfully",
      data: updatedPoll,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to update poll",
      error: error.message,
    });
  }
};

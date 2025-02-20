// services/commanService.js
export const commanService = {
  getItems: async (model) => {
    try {
      const data = await model.find({}); // Query to fetch all items
      return data;
    } catch (error) {
      throw new Error(
        `Error fetching items from ${model.modelName}: ${error.message}`
      );
    }
  },
  getItemById: async (model, id) => {
    try {
      const data = await model.findById(id); // Query to fetch all items
      return data;
    } catch (error) {
      throw new Error(
        `Error fetching items from ${model.modelName}: ${error.message}`
      );
    }
  },
};

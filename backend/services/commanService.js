export const commanService = {
  create: async (model, payload) => {
    try {
      // Dynamically create a new instance using the provided model
      const newEntity = new model(payload);

      // Save the data to the database
      const savedEntity = await newEntity.save();

      // Return a generalized response with the auto-generated _id and the entire payload
      return {
        message: `${model.modelName} successfully created`, // model.modelName provides the model's name
        data: {
          id: savedEntity._id, // MongoDB-generated _id
          ...payload, // Keep all other fields intact
        },
      };
    } catch (error) {
      console.error("Error creating record:", error);
      throw new Error("Internal server error");
    }
  },
  getAll: async (model, queryParams = {}) => {
    try {
      let { sortBy, order, filter, fields, limit, page } = queryParams;
      console.log(filter);

      // Default values
      sortBy = sortBy || "createdAt";
      order = order === "desc" ? -1 : 1; // Convert to MongoDB sorting order
      limit = limit ? parseInt(limit) : 10; // Default limit 10
      page = page ? parseInt(page) : 1; // Default page 1
      const skip = (page - 1) * limit; // Calculate the number of documents to skip

      // Construct MongoDB query filter
      let query = {};
      if (filter) {
        try {
          query = JSON.parse(filter); // Convert filter from string to object
        } catch (error) {
          throw new Error(
            "Invalid filter format. It must be a valid JSON object."
          );
        }
      }

      // Select fields (projection)
      let projection = {};
      if (fields) {
        projection = fields.split(",").reduce((acc, field) => {
          acc[field] = 1; // Include only specified fields
          return acc;
        }, {});
      }

      // Fetch records with filtering, sorting, pagination, and field selection
      const allRecords = await model
        .find(query, projection)
        .sort({ [sortBy]: order }) // Sorting
        .skip(skip) // Pagination: Skip records
        .limit(limit); // Pagination: Limit results

      // Count total records (for pagination info)
      const totalRecords = await model.countDocuments(query);

      // Return response

      return {
        message: `${model.modelName} records fetched successfully`,
        totalRecords,
        page,
        totalPages: Math.ceil(totalRecords / limit),
        data: allRecords,
      };
    } catch (error) {
      console.error("Error fetching records:", error);
      throw new Error("Internal server error");
    }
  },

  getItemById: async (model, id) => {
    try {
      // Fetch the record by ID from the model
      const record = await model.findById(id);

      // If no record is found, return an appropriate message
      if (!record) {
        return {
          message: `${model.modelName} with ID not found`,
          data: null,
        };
      }

      // Return the found record
      return { data: record };
    } catch (error) {
      console.error("Error fetching record by ID:", error);
      throw new Error("Internal server error");
    }
  },
  deleteById: async (model, id) => {
    try {
      const document = await model.findById(id);
      if (!document) {
        throw new Error(`${model.modelName} not found`);
      }
      // Step 3: Delete the document
      await model.findByIdAndDelete(id);
      return {
        message: `${model.modelName} deleted successfully`,
        data: { id },
      };
    } catch (error) {
      console.error(`Error deleting ${model.modelName}:`, error);
      throw error; // Re-throw the error for the controller to handle
    }
  },
  deleteAll: async (model) => {
    try {
      // Step 3: Delete the document
      await model.deleteMany();
      return {
        message: `${model.modelName} deleted successfully`,
        // data: { id },
      };
    } catch (error) {
      console.error(`Error deleting ${model.modelName}:`, error);
      throw error; // Re-throw the error for the controller to handle
    }
  },
  update: async (model, id, payload) => {
    try {
      // Find the entity by ID and update it with the provided payload
      const updatedEntity = await model.findByIdAndUpdate(
        id,
        payload,
        { new: true } // Return the updated document
      );

      // If the entity is not found, throw an error
      if (!updatedEntity) {
        throw new Error(`${model.modelName} not found`);
      }

      // Return a generalized response with the updated data
      return {
        message: `${model.modelName} successfully updated`,
        data: updatedEntity,
      };
    } catch (error) {
      console.error("Error updating record:", error);
      throw new Error("Internal server error");
    }
  },
};

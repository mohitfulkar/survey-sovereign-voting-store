import express from "express";
import bodyParser from "body-parser"; // If you're using body-parser

import cors from "cors";
import pollRoutes from "./routes/pollRoutes.js";
import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
const app = express();
const PORT = 3000;

connectDB();
// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", pollRoutes);
app.use("/", userRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

import express from "express";
import cors from "cors";
import pollRoutes from "./routes/pollRoutes.js";
import connectDB from "./config/db.js";

const app = express();
const PORT = 3000;
connectDB();
// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", pollRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

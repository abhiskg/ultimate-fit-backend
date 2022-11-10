import express from "express";
import cors from "cors";
import dbConnect from "./config/dbConnect";
import ServiceRoute from "./routes/ServiceRoute";
import ReviewRoute from "./routes/ReviewRoute";
import jwt from "jsonwebtoken";
import * as dotenv from "dotenv";

const app = express();

const port = process.env.PORT || 5000;

dotenv.config();

app.use(cors());
app.use(express.json());

// Service-Routes
app.use("/api/services", ServiceRoute);

// Review-Routes
app.use("/api/reviews", ReviewRoute);

// JWT-Route
app.post("/api/jwt", (req, res) => {
  const user = req.body;

  try {
    const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET as string, {
      expiresIn: "1h",
    });
    res.status(200).json({ token });
  } catch (error: any) {
    res.status(400).json({ success: false, error: error.message });
  }
});

dbConnect()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server connected running on port ${port}`);
    });
  })
  .catch((err: any) => {
    console.log(err.message);
  });

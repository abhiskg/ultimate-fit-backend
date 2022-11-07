import express from "express";
import cors from "cors";
import dbConnect from "./config/dbConnect";
import ServiceRoute from "./routes/ServiceRoute";

const app = express();

const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use("/api/service", ServiceRoute);

dbConnect()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server connected running on port ${port}`);
    });
  })
  .catch((err: any) => {
    console.log(err.message);
  });

import express from "express";
import cors from "cors";

// instanciate express app
const app = express();

// middlewares
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Express project with typescript");
  console.log("scheduling automation app");
});

export default app;

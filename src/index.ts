import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Express project with typescript");
  console.log("scheduling automation app");
});

export default app;

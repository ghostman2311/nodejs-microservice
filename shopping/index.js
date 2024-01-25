const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({ message: "Customer server has started on port 8003" });
});

app.listen(8003, () => {
  console.log("Server has been started on port 8003");
});

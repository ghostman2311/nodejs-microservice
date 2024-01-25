const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({ message: "Product server has started on port 8001" });
});

app.listen(8001, () => {
  console.log("Server has been started on port 8001");
});

const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({ message: "Customer server has started on port 8002" });
});

app.listen(8002, () => {
  console.log("Server has been started on port 8002");
});

const ProductService = require("../services/product-service");

module.exports = (app) => {
  app.use("/app-events", async (req, res) => {
    const service = new ProductService();
    const { payload } = req.body;

    console.log("Product Service recieved events-------------------->");
    return res.status(200).json(payload);
  });
};

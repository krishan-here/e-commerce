const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const shortid = require("shortid");
const cors = require("cors");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

//connect database
mongoose.connect("mongodb://localhost:27017/ecommerceDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const productSchema = new mongoose.Schema({
  id: { type: String, default: shortid.generate },
  title: String,
  price: Number,
  image: String,
  rating: Number,
});

const categorySchema = new mongoose.Schema({
  name: String,
  products: [productSchema],
});

const Product = mongoose.model("Product", productSchema);
const Category = mongoose.model("Category", categorySchema);

app.get("/:category", (req, res) => {
  Category.findOne({ name: req.params.category }, (err, foundCategory) => {
    if (err) {
      console.log(err);
    } else if (!foundCategory) {
      const prodCategory = new Category({
        name: req.params.category,
        products: [],
      });
      prodCategory.save();
      res.send(prodCategory);
    } else {
      res.send(foundCategory);
    }
  });
});

app.post("/:category", (req, res) => {
  const product = new Product({
    ...req.body,
  });
  Category.findOne({ name: req.params.category }, (err, found) => {
    if (err) {
      console.log(err);
    } else if (!found) {
      res.send("not found endpoint");
    } else {
      found.products.push(product);
      found.save();
      res.send("successfully added..");
    }
  });
});

app.listen(8000, () => {
  console.log("server is running on 8000");
});

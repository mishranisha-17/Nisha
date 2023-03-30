//Category, subcategory, Price, Name, Id
//Create a service for all products, product by Id, 
//Adding a new product, updating a product based on ID
const express = require("express");
const data = require("./data");
const mangooseObject=require("mangoose");
console.log('mangooseObject: ', mangooseObject);
const app = express();
port = 9000;
const products=data.products
const categories=data.categories
app.get("/products", function (req, res) {
  res.send(products);
});
app.get("/products/:id", function (req, res) {
  const found = products.find((Element) => Element.id == req.params.id);
  res.send(found);
});
app.get("/products/name/:name", function (req, res) {
  const found = products.find((Element) => Element.name == req.params.name);
  res.send(found);
});
app.listen(port, () => {
  console.log("Server is running on ", port);
});

app.use(express.json()); //to convert the code to json

app.post("/addproducts", (req, res) => {
  const newProduct = {
    id: products.length + 1,
    category: req.body.category,
    subcategory: req.body.subcategory,
    price: req.body.price,
    name: req.body.name,
  };
  products.push(newProduct);
  console.log(req.body);

  res.json({ message: "Your request is sucessfull!" });
});

app.put("/update/:id",(req,res)=>{
  const found = products.find((Element) => Element.id == req.params.id);
  const index=products.indexOf(found)
  if(req.body.category){products[index].category=req.body.category}
  if(req.body.subcategory){products[index].subcategory=req.body.subcategory}
  if(req.body.price){products[index].price=req.body.price}
  res.send(products[index])
})
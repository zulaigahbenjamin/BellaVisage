// import express
import express from "express";
  
// import function from controller
import { showProducts, showProductById, createProduct, updateProduct } from "../controllers/controller.js";
 
// init express router
const router = express.Router();
  
// Get All Product
router.get('/products', showProducts);
//  const id = req.params.id
//  const products = await getProducts(id)
//  res.send(products);
  
// Get Single Product
router.get('/products/:id', showProductById);

  
// // Call the getProductById function to fetch the product by ID
// getProductById(productId, (err, product) => {
//   if (err) {
//     console.error(err);
//     res.status(500).json({ error: 'Internal Server Error' });
//   } else if (!product) {
//     res.status(404).json({ error: 'Product not found' });
//   } else {
//     res.json(product);
//   }
// });
  
// Create New Product
router.post('/products', createProduct);
  
// Update Product
router.put('/products/:id', updateProduct);
  
// Delete Product

  
// export default router
export default router;
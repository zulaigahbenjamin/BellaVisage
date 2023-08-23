// import express
import express from "express";



  
// import function from controller
import { showUser, showUserById, createUser, updateUser, deleteUser} from "../controllers/User.js";
 
// init express router
const router = express.Router();
  
// Get All Product
router.get('/users', showUser);
// 
  
// Get Single Product
router.get('/users/:id', showUserById);
  
// Create New Product
router.post('/users', createUser);

// Update Product
router.put('/users/:id', updateUser);
  
// Delete Product

  router.delete('/users/:id', deleteUser);
// export default router
export default router;
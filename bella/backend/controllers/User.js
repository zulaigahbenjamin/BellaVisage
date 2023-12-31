// Import function from Product Model
// import User from "../models/user.js";


// const user = new User();
import { getUsers, getUsersById, insertUser, updateUserById, deleteUserById } from "../models/user.js";

  
// Get All Products
export const showUsers = (req, res) => {
    getUsers
    ((err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json({
                status: res.statusCode, 
                results
            });
        }
    });
}
  
// Get Single Product 
export const showUserById = (req, res) => {
    getUsersById(req.params.id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
  
// Create New Product
export const createUser  = (req, res) => {
    const data = req.body;
    insertUser(data, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
  
// Update Product
export const updateUser = (req, res) => {
    const data  = req.body;
    const id    = req.params.id;
    updateUserById(data, id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
  

export const deleteUser = (req, res) => {
    const id = req.params.id;
    deleteUserById(id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

// db.connect(function(err) {
//     if (err) throw err;
//     var sql = "DELETE FROM products WHERE id = ?";
//     con.query(sql, function (err, result) {
//       if (err) throw err;
//       console.log("Number of records deleted: " + result.affectedRows);
//     });
// });

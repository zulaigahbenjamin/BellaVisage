// import connection
import db from "../config/database.js";

// Get All Products
export const getProducts = (result) => {
    db.query("SELECT * FROM products;", (err, results) => {
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
}

// Get Single Product by ID
export const getProductById = (id, result) => {
    db.query("SELECT * FROM products WHERE prodId = ?", [id], (err, results) => {
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            if (results.length === 0) {
                result({ message: "Product not found" }, null);
            } else {
                result(null, results[0]);
            }
        }
    });
}

// Insert Product to Database
export const insertProduct = async (data) => {
    return new Promise((resolve, reject) => {
        db.query("INSERT INTO products SET ?", [data], (err, results) => {
            if (err) {
                console.log(err);
                reject(err);
            } else {
                resolve(results);
            }
        });
    });
}


// Update Product in Database by ID
export const updateProductById = (data, id, result) => {
    db.query("UPDATE products SET prodName = ?, amount = ? WHERE prodId = ?", [data.prodName,data.amount, id], (err, results) => {
            if (err) {
                console.log(err);
                result(err, null);
            } else {
                if (results.affectedRows === 0) {
                    result({
                        message: "Product not found"
                    }, null);
                } else {
                    result(null, results);
                }
            }
        });
}

// Delete Product from Database by ID
export const deleteProductById = (id, result) => {
    db.query("DELETE FROM products WHERE prodId = ?", [id], (err, results) => {
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            if (results.affectedRows === 0) {
                result({ message: "Product not found" }, null);
            } else {
                result(null, results);
            }
        }
    });
}


// import db from "../config/database.js";
// import { hash, compare, hashSync } from "bcrypt";

// class Users {
//     fetchUsers(req, res) {
//         const query = `
//         SELECT userID, firstName, lastName, userAge, Gender, userRole, emailAdd, userPass, userProfile
//         FROM Users;
//         `
//         db.query(query,
//             (err, results) => {
//                 if (err) throw err
//                 res.json({
//                     status: res.statusCode,
//                     results
//                 })
//             })
//     }
//     fetchUser(req, res) {
//         const userId = req.params.id; // Get the user ID from req.params
//         const query = `
//             SELECT userID, firstName, lastName, userAge, Gender, userRole, emailAdd, userPass, userProfile
//             FROM Users
//             WHERE userID = ${userId}; // Use userId here
//         `;
//         db.query(query,
//             (err, result) => {
//                 if (err) throw err;
//                 res.json({
//                     status: res.statusCode,
//                     result
//                 });
//             });
//     }
//     async login(req, res) {
//         const { emailAdd, userPass } = req.body;

//         const query = `
//             SELECT userID, firstName, lastName, userAge, Gender, userRole, emailAdd, userPass, userProfile
//             FROM Users
//             WHERE emailAdd = ?;
//         `;

//         db.query(query, [emailAdd], async (err, result) => {
//             if (err) throw err;

//             if (!result?.length) {
//                 res.json({
//                     status: res.statusCode,
//                     msg: "You provided a wrong email."
//                 });
//             } else {
//                 await compare(userPass, result[0].userPass, (cErr, cResult) => {
//                     if (cErr) throw cErr;

//                     const token = createToken({
//                         emailAdd,
//                         userPass
//                     });

//                     res.cookie("LegitUser", token, {
//                         maxAge: 360,
//                         httpOnly: true
//                     });

//                     if (cResult) {
//                         res.json({
//                             msg: "Your Logged in ;) ",
//                             token,
//                             result: result[0]
//                         });
//                     } else {
//                         res.json({
//                             status: res.statusCode,
//                             msg: "Invalid password or you have not registered"
//                         });
//                     }
//                 });
//             }
//         });
//     }

//     async register(req, res) {
//         const data = req.body;

//         if (!data.userPass) {
//             return res.json({
//                 status: res.statusCode,
//                 msg: "Password is required"
//             });
//         }

//         data.userPass = await hash(data.userPass, 15);

//         const user = {
//             emailAdd: data.emailAdd,
//             userPass: data.userPass
//         };

//         const query = `
//             INSERT INTO Users
//             SET ?;
//         `;

//         db.query(query, [data], (err) => {
//             if (err) throw err;

//             let token = createToken(user);

//             res.cookie("LegitUser", token, {
//                 maxAge: 3600,
//                 httpOnly: true
//             });

//             res.json({
//                 status: res.statusCode,
//                 msg: "You are now registered."
//             });
//         });
//     }

//     async showUsers(req, res) {
//         const query = `
//         SELECT userID, firstName, lastName, userAge, Gender, userRole, emailAdd, userProfile
//         FROM Users;
//         `
//         db.query(query, (err, results) => {
//             if (err) throw err;
//             res?.json({
//                 status: res?.statusCode,
//                 results
//             });
//         });
//     }

//     async showUserById(req, res) {
//         const userId = req.params.id;
//         const query = `
//         SELECT userID, firstName, lastName, userAge, Gender, userRole, emailAdd, userProfile
//         FROM Users
//         WHERE userID = ?;
//         `
//         db.query(query, [userId], (err, result) => {
//             if (err) throw err;
//             res.json({
//                 status: res.statusCode,
//                 result
//             });
//         });
//     }

//     async createUser(req, res) {
//         const data = req.body;

//         if (!data.userPass) {
//             return res.json({
//                 status: res.statusCode,
//                 msg: "Password is required"
//             });
//         }

//         data.userPass = await hash(data.userPass, 15);

//         const query = `
//             INSERT INTO Users
//             SET ?;
//         `;

//         db.query(query, [data], (err) => {
//             if (err) throw err;

//             res.json({
//                 status: res.statusCode,
//                 msg: "User created successfully."
//             });
//         });
//     }

//     async updateUser(req, res) {
//         const userId = req.params.id;
//         const newData = req.body;

//         if (newData.userPass) {
//             newData.userPass = await hash(newData.userPass, 15);
//         }

//         const query = `
//             UPDATE Users
//             SET ?
//             WHERE userID = ?;
//         `;

//         db.query(query, [newData, userId], (err) => {
//             if (err) throw err;

//             res.json({
//                 status: res.statusCode,
//                 msg: "User updated successfully."
//             });
//         });
//     }

//     async deleteUser(req, res) {
//         const userId = req.params.id;
//         const query = `
//             DELETE FROM Users
//             WHERE userID = ?;
//         `;

//         db.query(query, [userId], (err) => {
//             if (err) throw err;

//             res.json({
//                 status: res.statusCode,
//                 msg: "User deleted successfully."
//             });
//         });
//     }


   
// }

// export default Users;


// import connection
import db from "../config/database.js";
  
// Get All Products
export const getUsers = (result) => {
    db.query("SELECT * FROM Users;", (err, results) => {             
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
  
// Get Single Product by ID
export const getUsersById = (id, result) => {
    db.query("SELECT * FROM products WHERE id = ?", [id], (err, results) => {             
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            if (results.length === 0) {
                result({ message: "User not found" }, null);
            } else {
                result(null, results[0]);
            }
        }
    });   
}
  
// Insert Product to Database
export const insertUser = async (data) => {
    return new Promise((resolve, reject) => {
        db.query("INSERT INTO Users SET ?", [data], (err, results) => {             
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
export const updateUserById = (data, id, result) => {
    db.query("UPDATE Users SET firstName = ?,  lastName = ? WHERE userID = ?", [data.firstName, data.lastName, userID], (err, results) => {             
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            if (results.affectedRows === 0) {
                result({ message: "user not found" }, null);
            } else {
                result(null, results);
            }
        }
    });   
}
  
// Delete Product from Database by ID
export const deleteUserById = (id, result) => {
    db.query("DELETE FROM Users WHERE id = ?", [id], (err, results) => {             
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            if (results.affectedRows === 0) {
                result({ message: "User not found" }, null);
            } else {
                result(null, results);
            }
        }
    });   
}

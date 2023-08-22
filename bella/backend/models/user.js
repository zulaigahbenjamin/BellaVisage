import db from "../config/database.js";
import { hash, compare, hashSync } from "bcrypt";
import { createToken} from "../middleware/AuthenticateUser.js";

// const db = require("../config/config");
// const { hash, compare, hashSync } = require('bcrypt');
// const { createToken } =
//     require('../middleware/AuthenticateUser');
class Users {
    fetchUsers(req, res) {
        const query = `
        SELECT userID, firstName, lastName, userAge, Gender, userRole, emailAdd, userPwd, userProfile
        FROM Users;
        `
        db.query(query,
            (err, results) => {
                if (err) throw err
                res.json({
                    status: res.statusCode,
                    results
                })
            })
    }
    fetchUser(req, res) {
        const query = `
        SELECT userID, firstName, lastName, userAge, Gender, userRole, emailAdd, userPwd, userProfile
        FROM Users
        WHERE userID = ${req.params.id};
        `
        db.query(query,
            (err, result) => {
                if (err) throw err
                res.json({
                    status: res.statusCode,
                    result
                })
            })
    }
    async login(req, res) {
        const { emailAdd, userPwd } = req.body;

        const query = `
            SELECT userID, firstName, lastName, userAge, Gender, userRole, emailAdd, userPwd, userProfile
            FROM Users
            WHERE emailAdd = ?;
        `;

        db.query(query, [emailAdd], async (err, result) => {
            if (err) throw err;

            if (!result?.length) {
                res.json({
                    status: res.statusCode,
                    msg: "You provided a wrong email."
                });
            } else {
                await compare(userPwd, result[0].userPwd, (cErr, cResult) => {
                    if (cErr) throw cErr;

                    const token = createToken({
                        emailAdd,
                        userPwd
                    });

                    res.cookie("LegitUser", token, {
                        maxAge: 3600000,
                        httpOnly: true
                    });

                    if (cResult) {
                        res.json({
                            msg: "Logged in",
                            token,
                            result: result[0]
                        });
                    } else {
                        res.json({
                            status: res.statusCode,
                            msg: "Invalid password or you have not registered"
                        });
                    }
                });
            }
        });
    }

    async register(req, res) {
        const data = req.body;

        if (!data.userPwd) {
            return res.json({
                status: res.statusCode,
                msg: "Password is required"
            });
        }

        data.userPwd = await hash(data.userPwd, 15);

        const user = {
            emailAdd: data.emailAdd,
            userPwd: data.userPwd
        };

        const query = `
            INSERT INTO Users
            SET ?;
        `;

        db.query(query, [data], (err) => {
            if (err) throw err;

            let token = createToken(user);

            res.cookie("LegitUser", token, {
                maxAge: 3600000,
                httpOnly: true
            });

            res.json({
                status: res.statusCode,
                msg: "You are now registered."
            });
        });
    }

    // ... Other methods ...
}

export default Users;
import db from "../config/database";
import { hash, compare, hashSync } from "bcrypt";
import { createToken} from "../middleware/AuthenticateUser.js";

// const db = require("../config/config");
// const { hash, compare, hashSync } = require('bcrypt');
// const { createToken } =
//     require('../middleware/AuthenticateUser');
class Users {
    fetchUsers(req, res) {
        const query = `
        SELECT userID, firstName, lastName, userAge, Gender, userRole, emailAdd, userPass, userProfile
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
        SELECT userID, firstName, lastName, userAge, Gender, userRole, emailAdd, userPass, userProfile
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
        const { emailAdd, userPass } = req.body;

        const query = `
            SELECT userID, firstName, lastName, userAge, Gender, userRole, emailAdd, userPass, userProfile
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
                await compare(userPass, result[0].userPass, (cErr, cResult) => {
                    if (cErr) throw cErr;

                    const token = createToken({
                        emailAdd,
                        userPass
                    });

                    res.cookie("LegitUser", token, {
                        maxAge: 360,
                        httpOnly: true
                    });

                    if (cResult) {
                        res.json({
                            msg: "Your Logged in ;) ",
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

        if (!data.userPass) {
            return res.json({
                status: res.statusCode,
                msg: "Password is required"
            });
        }

        data.userPass = await hash(data.userPass, 15);

        const user = {
            emailAdd: data.emailAdd,
            userPass: data.userPass
        };

        const query = `
            INSERT INTO Users
            SET ?;
        `;

        db.query(query, [data], (err) => {
            if (err) throw err;

            let token = createToken(user);

            res.cookie("LegitUser", token, {
                maxAge: 3600,
                httpOnly: true
            });

            res.json({
                status: res.statusCode,
                msg: "You are now registered."
            });
        });
    }

   
}

export default Users;
const bcrypt = require("bcrypt");

const jwt = require("jsonwebtoken");

//Login Function
exports.login = async (req, res) => {
    var { pool } = require("../app.js");
    const {
        email,
        password
    } = req.body;
    try {
        const data = await pool.query(`SELECT * FROM customers WHERE email= $1;`, [email]) //Verifying if the user exists in the database
        const user = data.rows;
        if (user.length === 0) {
            res.status(400).json({
                error: "User is not registered, Sign Up first",
            });
        } else {
            bcrypt.compare(password, user[0].password, (err, result) => { //Comparing the hashed password
                if (err) {
                    res.status(500).json({
                        error: "Server error",
                    });
                } else if (result === true) { //Checking if credentials match
                    const token = jwt.sign({
                            email: email,
                        },
                        process.env.SECRET_KEY
                    );
                    res.status(200).json({
                        msg: "User signed in!",
                        token: token,
                        customer_id: user[0].customer_id,
                    });
                } else {
                    //Declaring the errors
                    if (result != true)
                        res.status(400).json({
                            error: "Enter correct password!",
                        });
                }
            })
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({
            error: "Database error occurred while signing in!", //Database connection error
        });
    };
};

exports.loginadmin = async (req, res) => {
    var { pool } = require("../app.js");
    const {
        email,
        password
    } = req.body;
    try {
        const data = await pool.query(`SELECT * FROM admins WHERE email= $1;`, [email]) //Verifying if the user exists in the database
        const user = data.rows;
        if (user.length === 0) {
            res.status(400).json({
                error: "Admin is not registered, Sign Up first",
            });
        } else {
            bcrypt.compare(password, user[0].password, (err, result) => { //Comparing the hashed password
                if (err) {
                    res.status(500).json({
                        error: "Server error",
                    });
                } else if (result === true) { //Checking if credentials match
                    const token = jwt.sign({
                            email: email,
                        },
                        process.env.SECRET_KEY
                    );
                    res.status(200).json({
                        msg: "admin signed in!",
                        token: token,
                        admin_id: user[0].admin_id,
                    });
                } else {
                    //Declaring the errors
                    if (result != true)
                        res.status(400).json({
                            error: "Enter correct password!",
                        });
                }
            })
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({
            error: "Database error occurred while signing in!", //Database connection error
        });
    };
};
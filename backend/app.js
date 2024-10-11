/* Imports */
const express = require('express');
const {Pool} = require('pg');
const api = require('./routes/api.js');
const cors = require('cors');
require("dotenv").config();

/* Initialisations & Middlewares */
const app = express();

// cors
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

const pool = new Pool({
    host: "localhost",
    user: "railwayadmin",
    port: 5432,
    password: "rs123",
    database: "railwaydb"
})
 
pool.connect().then(()=>{
    console.log("Postgres connected.");
}).catch((err)=>{
    console.log("Postgres could not connect. \n" + err);
});

// pool.query('SELECT * FROM customers where email=\'Yojimbo\'', (err,res)=> {
//     if(!err) {
//         console.log(res.rows);
//     } else {
//         console.log(err.message);
//     }
// });

/* Routes */
// app.use(api)
app.use('/', api)

/* Listen */
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Server running on port: "+PORT));

/* Exports */
module.exports = { pool };








// ***********************************************************************************8
// // queries
// // insert customers
// INSERT INTO customers (custname, email, password)
//     VALUES ('Shayan', 'Yojimbo', 'Drama');

// // insert schedule
// INSERT INTO schedules (train_id,going_to,going_from,arrival_time,departure_time)
// VALUES (1,'karachi','pindi','2022-11-10 00:00:00','2022-11-27 00:00:00');

// // insert train
// INSERT INTO trains (trainname,capacity,admin_id_of_creator)
// VALUES ('lyari express',5,1);

// // insert admins
// INSERT INTO admins (adminname, email,password)
// VALUES ('admin1','admin1@gmail.com','admin1');

// // insert booking
// INSERT INTO bookings (schedule_id, cust_id)
// VALUES (1,9);

// ALTER TABLE bookings RENAME COLUMN scheduleid TO schedule_id;
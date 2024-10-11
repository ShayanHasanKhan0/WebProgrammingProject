// get schedules
module.exports.getschedules = async (req, resp) => {
    var { pool } = require("../app.js");
    const response = pool.query(
        'SELECT scheduleid, train_id , going_to  , going_from, TO_CHAR(departure_time,\'DD/MM/YYYY\') AS date, departure_time::timestamp::time, arrival_time::timestamp::time, trainname, class, seats_booked, capacity FROM schedules INNER JOIN trains ON (schedules.train_id=trains.trainid) ORDER BY departure_time asc;',
         (err,res)=> {
            if(!err) {
                // console.log(res.rows)
                resp.status(200).send(res.rows)
                return;
            } else {
                console.log(err.message);
                resp.status(501).send(err.message);
            }
        }
    );
}

// get particular schedules
module.exports.getparticularschedule = async (req, resp) => {
    var { pool } = require("../app.js");
    var schedule_id = req.query.schedule_id;
    const response = pool.query(
        'SELECT scheduleid, train_id , going_to  , going_from, TO_CHAR(departure_time,\'DD/MM/YYYY\') AS date, departure_time::timestamp::time, arrival_time::timestamp::time, trainname, class, seats_booked, capacity FROM schedules INNER JOIN trains ON (schedules.train_id=trains.trainid AND schedules.scheduleid='+schedule_id+') ORDER BY departure_time asc;',
         (err,res)=> {
            if(!err) {
                // console.log(res.rows)
                resp.status(200).send(res.rows)
                return;
            } else {
                console.log(err.message);
                resp.status(501).send(err.message);
            }
        }
    );
}
// get bookings
module.exports.getbookings = async (req, resp) => {
    var { pool } = require("../app.js");
    var customer_id = req.query.cust_id;
    console.log(customer_id)
    const response = pool.query(
        'SELECT bookingid, schedule_id, cust_id FROM bookings where cust_id='+customer_id+';',
         (err,res)=> {
            if(!err) {
                // console.log(res.rows)
                resp.status(200).send(res.rows) 
                return;
            } else {
                console.log(err.message);
                resp.status(501).send(err.message);
            }
        }
    );
}

// get particular booking
module.exports.getparticularbooking = async (req, resp) => {
    var { pool } = require("../app.js");
    var booking_id = req.query.booking_id;
    // console.log(booking_id)
    const response = pool.query(
        'SELECT bookingid, schedule_id, cust_id, custname, seats FROM bookings a INNER JOIN CUSTOMERS b ON (a.bookingid='+booking_id+' AND a.cust_id =b.customer_id);',
         (err,res)=> {
            if(!err) {
                // console.log(res.rows)
                resp.status(200).send(res.rows)
                return;
            } else {
                console.log(err.message);
                resp.status(501).send(err.message);
            }
        }
    );
}


// get trains
module.exports.gettrains = async (req, resp) => {
    var { pool } = require("../app.js");
    const response = pool.query(
        'SELECT trainname, class, capacity, trainid FROM trains;',
         (err,res)=> {
            if(!err) {
                // console.log(res.rows)
                resp.status(200).send(res.rows)
                return;
            } else {
                console.log(err.message);
                resp.status(501).send(err.message);
            }
        }
    );
}

// get trains
module.exports.removetrain = async (req, resp) => {
    var { pool } = require("../app.js");
    console.log(req.body)
    const response = pool.query(
        'DELETE FROM TRAINS WHERE trainid='+req.body.train_id+';',
         (err,res)=> {
            if(!err) {
                // console.log(res.rows)
                resp.status(200).send(res.rows)
                return;
            } else {
                console.log(err.message);
                resp.status(501).send(err.message);
            }
        }
    );
}


// get customers
module.exports.getcustomers = async (req, resp) => {
    var { pool } = require("../app.js");
    const response = pool.query(
        'SELECT * from customers;',
         (err,res)=> {
            if(!err) {
                // console.log(res.rows)
                resp.status(200).send(res.rows)
                return;
            } else {
                console.log(err.message);
                resp.status(501).send(err.message);
            }
        }
    );
}

// add train
module.exports.addtrain = async (req, resp) => {
    var { pool } = require("../app.js");
    const response = pool.query(
        'INSERT INTO trains (trainname,capacity,admin_id_of_creator,class) VALUES (\'' +req.body.trainname+ '\',\''+req.body.capacity+ '\',\'' +req.body.admin_id_of_creator+  '\',\'' +req.body.class+ '\');',
         (err,res)=> {
            if(!err) {
                // console.log(res.rows)
                resp.status(200).send(res.rows)
                return;
            } else {
                console.log(err.message);
                resp.status(501).send(err.message);
            }
        }
    );
}

// add schedule
module.exports.addschedule = async (req, resp) => {
    var { pool } = require("../app.js");
    // console.log('INSERT INTO schedules (train_id,going_to,going_from,arrival_time,departure_time) VALUES (' + req.body.train_id + ',\'' + req.body.going_to +'\',\''+ req.body.going_from +'\',\''+req.body.date+' '+req.body.arrival_time+':00\',\''+req.body.date+' '+req.body.departure_time+':00\');')
    const response = pool.query(
        'INSERT INTO schedules (train_id,going_to,going_from,arrival_time,departure_time) VALUES (' + req.body.train_id + ',\'' + req.body.going_to +'\',\''+ req.body.going_from +'\',\''+req.body.date+' '+req.body.arrival_time+':00\',\''+req.body.date+' '+req.body.departure_time+':00\');',
         (err,res)=> {
            if(!err) {
                console.log(res.rows)
                resp.status(200).send(res.rows)
                return;
            } else {
                console.log(err.message);
                resp.status(501).send(err.message);
            }
        }
    );
}

// book schedule
module.exports.bookschedule = async (req, resp) => {
    var { pool } = require("../app.js");
    console.log(req.body)
    const response = pool.query(
        'INSERT INTO bookings (schedule_id, cust_id, seats) VALUES ('+req.body.schedule_id+','+req.body.customer_id+','+req.body.seats+'); UPDATE schedules SET seats_booked = '+req.body.seats_booked+' WHERE scheduleid = '+req.body.schedule_id+';',
         (err,res)=> {
            if(!err) {
                // console.log(res.rows)
                resp.status(200).send(res.rows)
                return;
            } else {
                console.log(err.message);
                resp.status(501).send(err.message);
            }
        }
    );
}

// cancel booking
module.exports.cancelbooking = async (req, resp) => {
    var { pool } = require("../app.js");
    const response = pool.query(
        'DELETE FROM BOOKINGS WHERE bookingid='+req.body.ticket_id+';',
         (err,res)=> {
            if(!err) {
                console.log(res.rows)
                resp.status(200).send(res.rows)
                return;
            } else {
                console.log(err.message);
                resp.status(501).send(err.message);
            }
        }
    );
}



// CREATE or REPLACE FUNCTION restock_seats()
// RETURNS TRIGGER
// AS
// $$
// BEGIN
//     raise notice 'Value: %', seats_booked;
// 	UPDATE SCHEDULES SET seats_booked=seats_booked-OLD.seats WHERE scheduleid=OLD.schedule_id;
//     RETURN NEW;
// END
// $$
// LANGUAGE plpgsql;

// CREATE TRIGGER restock_seats BEFORE DELETE ON bookings
// FOR EACH ROW
// EXECUTE PROCEDURE restock_seats(); 
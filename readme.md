README FILE FOR PEAN STACK

HOW TO RUN:
OPEN PROJECT FOLDER IN VS CODE.

PREREQUISITES:
+ NODE V14
+ ANGULAR CLI
+ postgres

“TO RUN BACKEND”
1. RUN COMMAND cd backend
2. RUN npm i COMMAND
3. RUN node app.js command

“TO RUN FRONT”
1. RUN COMMAND cd frontend
2. RUN npm i COMMAND
3. RUN ng serve command



There are two interfaces,
+login for customers: http://localhost:4200/signin
+login for admin: http://localhost:4200/signin-admin




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
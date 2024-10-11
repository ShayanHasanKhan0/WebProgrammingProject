// imports
const { Router } = require('express');
const loginuser = require('../controllers/login');
const registeruser = require('../controllers/register');
const query = require('../controllers/query');
const bodyParser = require('body-parser');

/* Initialisations & Middlewares */
const router = Router()

// Braintree
const braintree = require('../controllers/braintree')


router.get('/check-subscription', bodyParser.json(), braintree.getDate.get)
router.get('/client_token', bodyParser.json(), braintree.getClientToken.get)
router.get('/get-payment-methods', bodyParser.json(), braintree.getPaymentMethods.get)
router.post('/add-payment-method', bodyParser.json(), braintree.addPaymentMethod.post)
router.post('/subscribe', bodyParser.json(), braintree.subscribe.post)
router.post('/remove-payment-method', bodyParser.json(), braintree.removePaymentMethod.post)
router.post('/cancel-braintree-subscription', bodyParser.json(), braintree.cancelsubscription.post)

//

router.post('/register', bodyParser.json(), registeruser.register);

router.post('/login', bodyParser.json(), loginuser.login);

router.post('/register-admin', bodyParser.json(), registeruser.registeradmin);

router.post('/login-admin', bodyParser.json(), loginuser.loginadmin);

router.get('/get-schedules', bodyParser.json(), query.getschedules);

router.get('/get-bookings', bodyParser.json(), query.getbookings);

router.get('/get-customers', bodyParser.json(), query.getcustomers);

router.post('/cancel-booking', bodyParser.json(), query.cancelbooking);

router.get('/get-particular-schedule', bodyParser.json(), query.getparticularschedule);

router.get('/get-particular-ticket', bodyParser.json(), query.getparticularbooking);

router.get('/get-trains', bodyParser.json(), query.gettrains);

router.post('/remove-train', bodyParser.json(), query.removetrain);

router.post('/add-train', bodyParser.json(), query.addtrain);

router.post('/add-schedule', bodyParser.json(), query.addschedule);

router.post('/book-schedule', bodyParser.json(), query.bookschedule);

/* Exports */
module.exports = router;
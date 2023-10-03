const express = require('express');
const router = express.Router();
const {login, current,register} = require('../controllers/user')
const {auth} =require('../middleware/auth')
/* GET user listing. */
router.post('/login', login);
router.post('/register', register);
router.get('/current',auth, current);
module.exports = router;

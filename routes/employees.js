const express = require('express');
const router = express.Router();
const {auth}=require('../middleware/auth')
const { allEmployees, addEmployee, remove,edit,employee} = require('../controllers/employees')

router.get('/',auth, allEmployees)
router.post('/:id', employee)
router.post('/add',auth, addEmployee)
router.post('/remove/:id', auth, remove)
router.put('/edit/:id', auth, edit)

module.exports = router;
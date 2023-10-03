const express = require('express');
const router = express.Router();
const {auth}=require('../middleware/auth')
const { allEmployees, addEmployee} = require('../controllers/employees')

router.get('/',auth, allEmployees)
//router.post('/:id', auth, ()=>{console.log('one employee')})
router.post('/add',auth, addEmployee)
//router.post('/remove/:id', auth, ()=>{console.log('remove employee')})
//router.post('/edit/:id', auth, ()=>{console.log('edit employee')})

module.exports = router;
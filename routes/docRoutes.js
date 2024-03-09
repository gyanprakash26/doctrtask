const express = require("express")
const docController = require('../controllers/doctorController')

const router = express.Router();

router.post('/availbe', docController.getAvailbleDoctor)
router.post('/availbe2', docController.getAvailbleDoctor)


module.exports = router